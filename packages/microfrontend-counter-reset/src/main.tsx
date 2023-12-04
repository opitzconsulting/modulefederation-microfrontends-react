import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ResetCounter from './components/ResetCounter'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ResetCounter setCounter={(val) => console.log(val)} counter={0} />
  </React.StrictMode>,
)
