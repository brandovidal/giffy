import { useEffect, useRef, useState } from 'react'

export default function useNearScreen ({ distance = '100px' } = {}) {
  const [isNearScreen, setNearScreen] = useState(false)
  const fromRef = useRef()

  useEffect(() => {
    let observer

    const onChange = (entries, observer) => {
      const el = entries[0]
      console.log(el.isIntersecting)

      if (el.isIntersecting) {
        setNearScreen(true)
        observer.unobserve(el.target)
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined' ? window.IntersectionObserver : import('intersection-observer')
    ).then(() => {
      observer = new window.IntersectionObserver(onChange, {
        rootmargin: distance
      })
      observer.observe(fromRef.current)
    })

    return () => observer && observer.disconnect()
  })

  return { isNearScreen, fromRef }
}
