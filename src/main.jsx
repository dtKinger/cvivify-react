import React from 'react'
import ReactDOM from 'react-dom/client'
import Sidebar from './components/Sidebar.jsx'
import SidebarSection from './components/SidebarSection.jsx'
import OutputArea from './components/OutputArea.jsx'
import Header from "./components/Header.jsx"
import Icon from './components/Icon.jsx'
import './index.css'
import downloadPDF from "./assets/download-as-PDF-icon.svg"

console.log("Don't be afraid")

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Sidebar>
      <SidebarSection title="Profile" extensible="false"/>
      <sidebarSection title="Experience" extensible="true" />
      <sidebarSection title="Education" extensible="true" />
      <sidebarSection title="Other" extensible="true" />
    </Sidebar>

    <OutputArea>
      <Header>
        <Icon classes="icon icon__medium" source={downloadPDF} alt="Download as PDF icon"/>
      </Header>
    </OutputArea>

  </React.StrictMode>,
)
