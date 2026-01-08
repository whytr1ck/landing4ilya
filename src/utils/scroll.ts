export function scrollToTop (behaviorType: 'smooth' | 'instant' | 'auto' = 'smooth') {
  window.scrollTo({
    top: 0,
    behavior: behaviorType
  })
}