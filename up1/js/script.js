// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  console.log("Privacy payment page loaded")

  // Track page view
  if (window.kwaiPixelId) {
    console.log("Kwai Pixel tracking initialized")
  }

  // Add smooth scroll behavior
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })

  // Track payment button clicks
  const paymentButton = document.querySelector(".payment-button")
  if (paymentButton) {
    paymentButton.addEventListener("click", () => {
      console.log("Payment button clicked")
      // Track conversion event if needed
    })
  }
})
