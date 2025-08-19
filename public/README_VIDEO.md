# Demo Video Setup

To use the video popup functionality, you need to add your demo video file to this folder.

## Steps:

1. **Add your video file** to this `public/` folder
2. **Rename it to** `demo-video.mp4` (or update the videoUrl in Hero.tsx)
3. **Supported formats**: MP4 is recommended for best compatibility

## Current Configuration:

The video popup is configured to look for `/demo-video.mp4` in the public folder.

## File Location:

- **Current path**: `/public/demo-video.mp4`
- **URL in code**: `/demo-video.mp4`

## Alternative:

If you want to use a different filename or path, update the `videoUrl` prop in `src/components/Hero.tsx`:

```tsx
<VideoPopup
  isOpen={showVideo}
  onClose={() => setShowVideo(false)}
  videoUrl="/your-video-filename.mp4"  // Update this line
  title="Safe Drop Demo"
/>
```

## Video Recommendations:

- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 or 1280x720
- **Duration**: 1-3 minutes recommended
- **File size**: Keep under 50MB for better loading performance
