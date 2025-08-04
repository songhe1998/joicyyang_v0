// Test script to verify the YouTube thumbnail URL works
const testThumbnailUrl = "https://img.youtube.com/vi/1mok9lTrvHc/hqdefault.jpg"

console.log("Testing YouTube thumbnail URL:", testThumbnailUrl)

// Create a test image element
const testImg = new Image()
testImg.crossOrigin = "anonymous"

testImg.onload = function () {
  console.log("✅ Thumbnail URL works! Image dimensions:", this.naturalWidth, "x", this.naturalHeight)
  console.log("✅ You can test this URL directly in your browser:", testThumbnailUrl)
}

testImg.onerror = () => {
  console.log("❌ Thumbnail URL failed to load")
}

testImg.src = testThumbnailUrl
