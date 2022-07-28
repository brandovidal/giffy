import './index.css'

export default function Gif ({ id, title, url } = {}) {
  return (
    <a href='#' className='Gif' key={id}>
      <h4>{title}</h4>
      <img src={url} alt={id} />
    </a>
  )
}
