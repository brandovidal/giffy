import React, { useState } from 'react'
import { useLocation, Link } from 'wouter'

import ListOfGifs from '../../components/ListOfGifs'

import { useGifs } from '../../hooks/useGifs'

const POPULAR_GIFS = ['Matrix', 'Chile', 'Colombia', 'Ecuador']

export default function Home () {
  const [keyword, setKeyword] = useState('')
  const [, setLocation] = useLocation()
  const { gifs } = useGifs()

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setLocation(`search/${keyword}`)
  }

  const handleChange = (evt) => {
    setKeyword(evt.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' value={keyword} onChange={handleChange} />
      </form>
      <h3 className='App-title'>ultimos gifs</h3>
      <ListOfGifs gifs={gifs} />

      <h3 className='App-title'>Los gifs más populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
