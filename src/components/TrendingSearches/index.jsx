import { useEffect, useRef, useState } from 'react'
import getTrendingSearch from '@/services/getTrendingSearch'

import Category from '../Category'

function TrendingSearches () {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrendingSearch().then(setTrends)
  }, [])

  return <Category name='Tendencias' options={trends} />
}

export default function LazyTrending () {
  const [show, setShow] = useState(false)
  const elementRef = useRef(null)

  const onChange = (entries, observer) => {
    const el = entries[0]
    console.log(el.isIntersecting)

    if (el?.isIntersecting) {
      setShow(true)
      observer.disconnect()
    }
  }

  useEffect(() => {
    const observer = new window.IntersectionObserver(onChange, {
      rootmargin: '100px'
    })

    observer.observe(elementRef.current)
  })

  return (
    <div ref={elementRef}>
      {show ? <TrendingSearches /> : ''}
    </div>
  )
}
