import { useContext, useEffect, useState } from 'react'
import GifContext from '../context/GifContext'
import getGifs from '../services/getGifs'

export function useGifs ({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const { gifs, setGifs } = useContext(GifContext)

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
    [keyword, setGifs]
  )

  return { loading, gifs }
}
