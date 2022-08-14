import './ListOfGifs.css'

// Components
import Gif from '../Gif'

export default function ListOfGifs ({ gifs }) {
  return (
    <div className='ListOfGifs'>
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url} />
      ))}
    </div>
  )
}
