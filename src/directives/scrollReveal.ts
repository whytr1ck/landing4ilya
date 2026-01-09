import type {Directive, DirectiveBinding} from 'vue'

export type ScrollRevealAnimation = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale'

interface ScrollRevealOptions {
  animation?: ScrollRevealAnimation
  threshold?: number
  rootMargin?: string
  once?: boolean
  delay?: number
}

const observerMap = new WeakMap<HTMLElement, IntersectionObserver>()

function getAnimationClass(animation: ScrollRevealAnimation): string {
  const map: Record<ScrollRevealAnimation, string> = {
    'fade-up': 'scroll-fade-up',
    'fade-down': 'scroll-fade-down',
    'fade-left': 'scroll-fade-left',
    'fade-right': 'scroll-fade-right',
    'scale': 'scroll-scale'
  }
  return map[animation] || 'scroll-fade-up'
}

function parseBinding(binding: DirectiveBinding): ScrollRevealOptions {
  const value = binding.value

  if (typeof value === 'string') {
    return {animation: value as ScrollRevealAnimation}
  }

  if (typeof value === 'object' && value !== null) {
    return value as ScrollRevealOptions
  }

  return {animation: 'fade-up'}
}

export const vScrollReveal: Directive<HTMLElement> = {
  mounted(el, binding) {
    const options = parseBinding(binding)
    const {
      animation = 'fade-up',
      threshold = 0.15,
      rootMargin = '-50px',
      once = true,
      delay = 0
    } = options

    // Add initial classes
    el.classList.add(getAnimationClass(animation), 'scroll-hidden')

    // Add delay class if specified
    if (delay > 0) {
      const delayClass = `scroll-delay-${Math.min(delay, 500)}`
      el.classList.add(delayClass)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.remove('scroll-hidden')
            el.classList.add('scroll-visible')
            if (once) {
              observer.unobserve(el)
            }
          } else if (!once) {
            el.classList.remove('scroll-visible')
            el.classList.add('scroll-hidden')
          }
        })
      },
      {threshold, rootMargin}
    )

    observer.observe(el)
    observerMap.set(el, observer)
  },

  unmounted(el) {
    const observer = observerMap.get(el)
    if (observer) {
      observer.disconnect()
      observerMap.delete(el)
    }
  }
}
