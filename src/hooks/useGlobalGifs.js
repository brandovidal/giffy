import { useContext } from 'react'
import GifContext from '@/context/GifContext'

export default function useGlobalGifs () {
  const { gifs } = useContext(GifContext)
  return gifs
}
