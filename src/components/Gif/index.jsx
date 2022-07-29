import { Link } from 'wouter'
import './index.css'

export default function Gif ({ id, title, url } = {}) {
  return (
    <Link to={`/gif/${id}`} className='Gif-link' key={id}>
      <h4>{title}</h4>
      <img loading='lazy' src={url} alt={id} />
    </Link>
  )
}
