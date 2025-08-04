// Test script to debug YouTube thumbnail URL generation

// Live-performance version (WORKING)
const getYouTubeThumbnailWorking = (url) => {
  let videoId = ""

  if (url.includes("youtube.com/watch")) {
    const urlParams = new URLSearchParams(url.split("?")[1])
    videoId = urlParams.get("v") || ""
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0] || ""
  }

  if (videoId) {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  }

  return "/placeholder.svg?height=400&width=600&text=Video+Thumbnail"
}

// Homepage/Concept-visuals version (NOT WORKING)
const getYouTubeThumbnailNotWorking = (url) => {
  let videoId = ""

  if (url.includes("youtube.com/watch")) {
    const urlParams = new URLSearchParams(url.split("?")[1])
    videoId = urlParams.get("v") || ""
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0] || ""
  }

  if (videoId) {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  }

  return "/placeholder.svg?height=400&width=600&text=Video+Thumbnail"
}

// Test URLs
const testUrls = [
  "https://www.youtube.com/watch?v=1mok9lTrvHc",
  "https://youtu.be/IV76VC0HrHo",
  "https://www.youtube.com/watch?v=jhBPsDZ6eA4",
  "https://www.youtube.com/watch?v=tjWxjKeKT5Q",
]

console.log("=== DEBUGGING YOUTUBE THUMBNAIL GENERATION ===")

testUrls.forEach((url, index) => {
  console.log(`\n--- Test URL ${index + 1}: ${url} ---`)

  const workingResult = getYouTubeThumbnailWorking(url)
  const notWorkingResult = getYouTubeThumbnailNotWorking(url)

  console.log("Working version result:", workingResult)
  console.log("Not working version result:", notWorkingResult)
  console.log("Results match:", workingResult === notWorkingResult)

  // Extract video ID manually for verification
  let manualVideoId = ""
  if (url.includes("youtube.com/watch")) {
    const urlParams = new URLSearchParams(url.split("?")[1])
    manualVideoId = urlParams.get("v") || ""
  } else if (url.includes("youtu.be/")) {
    manualVideoId = url.split("youtu.be/")[1]?.split("?")[0] || ""
  }

  console.log("Manual video ID extraction:", manualVideoId)
  console.log("Expected thumbnail URL:", `https://img.youtube.com/vi/${manualVideoId}/hqdefault.jpg`)
})

// Test the actual URLs used in each page
console.log("\n=== TESTING ACTUAL PAGE URLS ===")

// Homepage showreel
const homepageUrl = "https://www.youtube.com/watch?v=1mok9lTrvHc"
console.log("\nHomepage showreel URL:", homepageUrl)
console.log("Generated thumbnail:", getYouTubeThumbnailNotWorking(homepageUrl))

// Concept visuals featured
const conceptFeaturedUrl = "https://www.youtube.com/watch?v=1mok9lTrvHc"
console.log("\nConcept visuals featured URL:", conceptFeaturedUrl)
console.log("Generated thumbnail:", getYouTubeThumbnailNotWorking(conceptFeaturedUrl))

// Live performance (working)
const livePerformanceUrl = "https://www.youtube.com/watch?v=1mok9lTrvHc"
console.log("\nLive performance URL:", livePerformanceUrl)
console.log("Generated thumbnail:", getYouTubeThumbnailWorking(livePerformanceUrl))
