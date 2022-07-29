import { useContext } from 'react'
import StaticContext from '../../context/StaticContext'

export default function Detail ({ params }) {
  const context = useContext(StaticContext)
  console.log({ context })

  return <h1>GIF con id {params.id}</h1>
}
