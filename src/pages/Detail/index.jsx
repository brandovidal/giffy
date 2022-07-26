import Gif from '@/components/Gif'
import useGlobalGifs from '@/hooks/useGlobalGifs'

export default function Detail ({ params }) {
  const gifs = useGlobalGifs()

  const gif = gifs.find((gif) => gif.id === params.id)
  console.log({ gif })

  return (
    <>
      <h3 className='App-title'>{gif.title}</h3>
      <Gif {...gif} />
    </>
  )
}
