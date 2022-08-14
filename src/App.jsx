import './App.css'

import { Link, Route } from 'wouter'

// Pages
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'

// Context
import StaticContext from './context/StaticContext'
import { GifContextProvider } from './context/GifContext'

export default function App () {
  return (
    <StaticContext.Provider
      value={{
        name: 'midudev',
        suscribeteAlCanal: true
      }}
    >
      <div className='App'>
        <h1>
          <Link to='/'>
            <figure className='App-logo'>
              <img alt='Giffy logo' src='/logo.png' />
            </figure>
          </Link>
        </h1>
        <GifContextProvider>
          <Route component={Home} path='/' />
          <Route component={SearchResults} path='/search/:keyword' />
          <Route component={Detail} path='/gif/:id' />
        </GifContextProvider>
      </div>
    </StaticContext.Provider>
  )
}
