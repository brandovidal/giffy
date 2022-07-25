import './App.css'

// Components
import ListOfGifs from './components/ListOfGifs'

export default function App () {
  return (
    <div className='App'>
      <ListOfGifs keyword='panda' />
    </div>
  )
}
