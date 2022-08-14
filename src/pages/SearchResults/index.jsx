import { useGifs } from '@/hooks/useGifs'

import ListOfGifs from '@/components/ListOfGifs'
import Spinner from '@/components/Spinner'

export default function SearchResults ({ params }) {
  const { keyword = '' } = params
  const { loading, gifs } = useGifs({ keyword })

  return (
    <>
      {loading
        ? (
          <Spinner />
          )
        : (
          <>
            <h3 className='App-title'>{decodeURI(keyword)}</h3>
            <ListOfGifs gifs={gifs} />
          </>
          )}
    </>
  )
}
