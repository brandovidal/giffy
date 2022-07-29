import ListOfGifs from '../../components/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'

export default function SearchResults ({ params }) {
  const { keyword = '' } = params
  const { loading, gifs } = useGifs({ keyword })

  return <ListOfGifs loading={loading} gifs={gifs} />
}
