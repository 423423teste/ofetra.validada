// Progress bar animation
let progress = 0
const progressFill = document.getElementById("progress-fill")
const progressText = document.getElementById("progress-text")

function updateProgress() {
  if (progress < 100) {
    progress += 1
    progressFill.style.width = progress + "%"
    progressText.textContent = progress + "%"
    setTimeout(updateProgress, 30)
  }
}

// Start progress animation when page loads
window.addEventListener("load", () => {
  setTimeout(updateProgress, 500)
})

// Show achievement badge after progress completes
setTimeout(() => {
  const achievement = document.getElementById("achievement")
  achievement.classList.remove("hidden")

  // Hide after 5 seconds
  setTimeout(() => {
    achievement.classList.add("hidden")
  }, 5000)
}, 3500)

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})
