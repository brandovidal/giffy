import { createRoot } from 'react-dom/client'

import App from './App'
import './index.css'

const comtainer = document.getElementById('root')
const root = createRoot(comtainer)

root.render(<App />)
