import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './components/Counter.jsx'
import Header from "./components/Header.jsx"
import Test from './components/Test.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header>
      <Test />
    </Header>
    
    <Counter />
  </React.StrictMode>,
)
