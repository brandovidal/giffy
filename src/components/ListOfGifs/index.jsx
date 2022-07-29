// Components
import Gif from '../Gif'
import Spinner from '../Spinner'

export default function ListOfGifs ({ loading, gifs }) {
  const ListOfGif = gifs.map(({ id, title, url }) => <Gif key={id} id={id} title={title} url={url} />)

  return <>{loading ? <Spinner /> : <div>{ListOfGif}</div>}</>
}
