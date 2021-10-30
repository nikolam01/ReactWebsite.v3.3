import { useEffect } from 'react'

export const useLoader = () => {
  const authenticate = () => {
    return new Promise((resolve) => setTimeout(resolve, 1000))
  }
  useEffect(() => {
    authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if (ele) {
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }, [])
}
