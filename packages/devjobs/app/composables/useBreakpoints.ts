import { ref } from 'vue'

export default function useBreakpoints () {
  const mobileMediaQuery = window.matchMedia('(max-width: 767px)')
  const tabletMediaQuery = window.matchMedia('(min-width: 768px) and (max-width: 1023px)')
  const desktopMediaQuery = window.matchMedia('(min-width: 1024px)')

  const isMobile = ref(mobileMediaQuery.matches)
  const isTablet = ref(tabletMediaQuery.matches)
  const isDesktop = ref(desktopMediaQuery.matches)

  mobileMediaQuery.addEventListener('change', (event) => {
    isMobile.value = event.matches
  })

  tabletMediaQuery.addEventListener('change', (event) => {
    isTablet.value = event.matches
  })

  desktopMediaQuery.addEventListener('change', (event) => {
    isDesktop.value = event.matches
  })

  return {
    isMobile,
    isTablet,
    isDesktop,
  }
}
