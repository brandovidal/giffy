import { useEffect, useState } from 'react'

// Services
import getGifs from '../services/getGifs'

// Components
import Gif from './Gif'

export default function ListOfGifs ({ params }) {
  const { keyword } = params

  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs)
      setLoading(false)
    })
  }, [keyword])

  if (loading) return <i>Cargando</i>

  return (
    <div>
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url} />
      ))}
    </div>
  )
}
