import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './components/Counter.jsx'
import Header from "./components/Header.jsx"
import Icon from './components/Icon.jsx'
import './index.css'
import downloadPDF from "./assets/download-as-PDF-icon.svg"

console.log("Don't be afraid")

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header>
      <Icon classes="icon icon__medium" source={downloadPDF} alt="Download as PDF icon"/>
    </Header>
    <Counter />
  </React.StrictMode>,
)
