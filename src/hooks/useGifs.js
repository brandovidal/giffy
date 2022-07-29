import { useEffect, useState } from 'react'
import getGifs from '../services/getGifs'

export function useGifs ({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])

  useEffect(
    function () {
      setLoading(true)
      const keywordToUse = keyword || window.localStorage.getItem('lastKeyword') || 'random'

      getGifs({ keyword: keywordToUse }).then((gifs) => {
        setGifs(gifs)
        setLoading(false)
        window.localStorage.setItem('lastKeyword', keyword)
      })
    },
    [keyword]
  )

  return { loading, gifs }
}
