import { useEffect, useState } from 'react'

// Services
import getGifs from '../services/getGifs'

// Components
import Gif from './Gif'

export default function ListOfGifs ({ keyword } = {}) {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ keyword })
      .then(gifs => setGifs(gifs))
  }, [keyword])

  return (
    gifs.map(({ id, title, url }) => (
      <Gif key={id} id={id} title={title} url={url} />
    ))
  )
}
