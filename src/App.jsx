import './App.css'

import { Link, Route } from 'wouter'

// Pages
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'

export default function App () {
  return (
    <div className='App'>
      <h1>
        <Link to='/'>GIFFY</Link>
      </h1>
      <Route component={Home} path='/' />
      <Route component={SearchResults} path='/search/:keyword' />
      <Route component={Detail} path='/gif/:id' />
    </div>
  )
}
