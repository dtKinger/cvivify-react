import React from 'react'
import ReactDOM from 'react-dom/client'
import Sidebar from './components/Sidebar.jsx'
import SidebarSection from './components/SidebarSection.jsx'
import SidebarProfile from './components/SidebarProfile.jsx'
import OutputArea from './components/OutputArea.jsx'
import Header from "./components/Header.jsx"
import Icon from './components/Icon.jsx'
import './index.css'
import downloadPDF from "./assets/download-as-PDF-icon.svg"

console.log("Don't be afraid")

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Sidebar>
      <SidebarProfile title="Profile" classes="sidebar-section profile"/>
      <SidebarSection title="Experience" classes="sidebar-section" type="rte"/>
      <SidebarSection title="Education" classes="sidebar-section" type="rte"/>
      <SidebarSection title="Other" classes="sidebar-section" type="rte"/>
    </Sidebar>

    <OutputArea>
      <Header>
        <Icon classes="icon icon__medium" source={downloadPDF} alt="Download as PDF icon"/>
      </Header>
    </OutputArea>

  </React.StrictMode>,
)
