# Joicy Yang Portfolio - Video Implementation Guide

## Video Player Features

The website now supports actual video playback with the following features:

### ✅ **Supported Video Formats:**
- **YouTube Links** - Automatically converts to embedded player
- **MP4 Files** - Uses HTML5 video player
- **Auto-play** - Videos start playing when opened

### ✅ **Video Player Modal:**
- Full-screen overlay with video player
- Close button (X) and ESC key support
- Click outside to close
- Video title display
- Responsive design

## Video Data Structure

Each video now includes:
\`\`\`javascript
{
  id: 1,
  title: "Video Title",
  thumbnail: "/images/videos/folder/thumbnail.png", // Still used for preview
  videoUrl: "https://www.youtube.com/watch?v=...", // Actual video link
  duration: "05:34",
  // ... other metadata
}
\`\`\`

## Current Video Links (All using placeholder)

**All videos currently use:** `https://www.youtube.com/watch?v=jhBPsDZ6eA4&list=RDjhBPsDZ6eA4&start_radio=1`

### **Homepage Showreel:**
- Thumbnail: `/images/showreel/showreel-thumbnail.png`
- Video: Placeholder YouTube link

### **Live Performance Page (7 videos):**
1. David Tic-Tock April 2022 - Placeholder YouTube link
2. Bury a Friend by Galen Hooks - Placeholder YouTube link  
3. Estilazo - Placeholder YouTube link
4. Music for Love Mario - Placeholder YouTube link
5. Tic Tock November 2021 - Placeholder YouTube link
6. Baseline HQ Opening Act - Placeholder YouTube link
7. Afro Dance - Placeholder YouTube link

### **Concept Visuals Page (4 videos):**
1. Featured Concept Video - Placeholder YouTube link
2. Concept Visual 1 - Placeholder YouTube link
3. Choreography Piece 1 - Placeholder YouTube link
4. Creative Movement - Placeholder YouTube link

## How to Replace Video Links

### **For YouTube Videos:**
Replace the `videoUrl` field with the actual YouTube link:
\`\`\`javascript
videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
\`\`\`

### **For MP4 Files:**
Replace the `videoUrl` field with the MP4 file path:
\`\`\`javascript
videoUrl: "/videos/your-video-file.mp4"
\`\`\`

### **For Vimeo or Other Platforms:**
The video player will need to be extended to support other platforms.

## Video Interaction

- **Thumbnails** remain for preview/browsing
- **Click thumbnail** opens full video player modal
- **Video plays automatically** when modal opens
- **Responsive** - works on all screen sizes
- **Keyboard accessible** - ESC to close

## File Organization

- **Thumbnails**: Keep in organized folders as before
- **Video Files**: Can be stored in `/public/videos/` if using MP4
- **External Links**: YouTube, Vimeo, etc. - no local storage needed

Replace the placeholder YouTube link with actual video URLs as needed!
