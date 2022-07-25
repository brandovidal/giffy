export default function Gif ({ id, title, url } = {}) {
  return (
    <div key={id}>
      <h4>{title}</h4>
      <small>{id}</small>
      <img src={url} alt={id} />
    </div>
  )
}
