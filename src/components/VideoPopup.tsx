import React, { useState, useRef, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react';

interface VideoPopupProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
}

const VideoPopup: React.FC<VideoPopupProps> = ({ 
  isOpen, 
  onClose, 
  videoUrl, 
  title = "Safe Drop Demo" 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isYouTube, setIsYouTube] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check if the URL is a YouTube URL
  useEffect(() => {
    const isYT = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
    setIsYouTube(isYT);
    
    if (isYT) {
      setIsLoading(false);
      setHasError(false);
    }
  }, [videoUrl]);

  // Convert YouTube URL to embed URL
  const getYouTubeEmbedUrl = (url: string) => {
    let videoId = '';
    
    if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('v=')[1]?.split('&')[0] || '';
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1] || '';
    }
    
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`;
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (!isYouTube) {
        setIsLoading(true);
        setHasError(false);
      }
      setIsPlaying(false);
      setCurrentTime(0);
    } else {
      document.body.style.overflow = 'unset';
      setIsPlaying(false);
      setCurrentTime(0);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isYouTube]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case ' ':
          if (!isYouTube) {
            e.preventDefault();
            togglePlay();
          }
          break;
        case 'm':
        case 'M':
          if (!isYouTube) {
            toggleMute();
          }
          break;
        case 'f':
        case 'F':
          toggleFullscreen();
          break;
        case 'ArrowLeft':
          if (!isYouTube && videoRef.current) {
            e.preventDefault();
            videoRef.current.currentTime = Math.max(0, currentTime - 10);
          }
          break;
        case 'ArrowRight':
          if (!isYouTube && videoRef.current) {
            e.preventDefault();
            videoRef.current.currentTime = Math.min(duration, currentTime + 10);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentTime, duration, onClose, isYouTube]);

  const togglePlay = () => {
    if (videoRef.current && !isYouTube) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current && !isYouTube) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && !isYouTube) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current && !isYouTube) {
      setDuration(videoRef.current.duration);
      setIsLoading(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isYouTube) {
      const time = parseFloat(e.target.value);
      if (videoRef.current) {
        videoRef.current.currentTime = time;
        setCurrentTime(time);
      }
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div 
        ref={containerRef}
        className="relative w-full h-full max-w-6xl max-h-[90vh] bg-black rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h3 className="text-white text-xl font-semibold">{title}</h3>
              <div className="text-xs text-gray-300 bg-black/50 px-2 py-1 rounded">
                {isYouTube ? 'YouTube Video' : 'Press ESC to close, Space to play/pause'}
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-white/10"
              title="Close (ESC)"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Video Player */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* YouTube Embed */}
          {isYouTube ? (
            <iframe
              src={getYouTubeEmbedUrl(videoUrl)}
              className="w-full h-full"
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              {/* Loading State */}
              {isLoading && (
                <div className="flex flex-col items-center justify-center text-white text-center p-8">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mb-4"></div>
                  <p className="text-xl">Loading video...</p>
                </div>
              )}

              {/* Error State */}
              {hasError && (
                <div className="flex flex-col items-center justify-center text-white text-center p-8">
                  <div className="text-6xl mb-4">❌</div>
                  <p className="text-xl mb-2">Video not available</p>
                  <p className="text-gray-300">Please check your video URL or add your demo video to the public folder</p>
                  <p className="text-sm text-gray-400 mt-2">See README_VIDEO.md for instructions</p>
                </div>
              )}

              {/* Video Element */}
              {!hasError && (
                <video
                  ref={videoRef}
                  className="w-full h-full object-contain"
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  onError={() => {
                    console.error('Video failed to load');
                    setHasError(true);
                    setIsLoading(false);
                  }}
                  playsInline
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              {/* Play/Pause Overlay - Only show when video is loaded and not playing */}
              {!isLoading && !hasError && !isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
                >
                  <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                    <Play className="h-12 w-12 text-black ml-1" />
                  </div>
                </button>
              )}
            </>
          )}
        </div>

        {/* Video Controls - Only show when video is loaded, no error, and not YouTube */}
        {!isLoading && !hasError && !isYouTube && (
          <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="space-y-3">
              {/* Progress Bar */}
              <div className="flex items-center space-x-3">
                <span className="text-white text-sm w-16">{formatTime(currentTime)}</span>
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  className="flex-1 h-2 bg-white/30 rounded-lg appearance-none cursor-pointer video-slider"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(currentTime / (duration || 1)) * 100}%, rgba(255,255,255,0.3) ${(currentTime / (duration || 1)) * 100}%)`
                  }}
                />
                <span className="text-white text-sm w-16">{formatTime(duration)}</span>
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={togglePlay}
                    className="text-white hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-white/10"
                    title={`${isPlaying ? 'Pause' : 'Play'} (Space)`}
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </button>
                  
                  <button
                    onClick={toggleMute}
                    className="text-white hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-white/10"
                    title={`${isMuted ? 'Unmute' : 'Mute'} (M)`}
                  >
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </button>
                </div>

                <button
                  onClick={toggleFullscreen}
                  className="text-white hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-white/10"
                  title={`${isFullscreen ? 'Exit fullscreen' : 'Fullscreen'} (F)`}
                >
                  {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPopup;
