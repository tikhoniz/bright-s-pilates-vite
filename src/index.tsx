import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './app/App.tsx'
import './app/styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
