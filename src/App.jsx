import './App.css'

import { Link, Route } from 'wouter'

// Components
import ListOfGifs from './components/ListOfGifs'

export default function App () {
  return (
    <div className='App'>
      <h1>App</h1>

      <Link to='/gif/panda'>Gifs de panda</Link>
      <Link to='/gif/rick'>Gifs de Rick</Link>

      <Route path='/gif/:keyword' component={ListOfGifs} />
    </div>
  )
}
