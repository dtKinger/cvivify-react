import { useState } from "react";
import Sidebar from "./Sidebar";
import SidebarSection from './SidebarSection.jsx'
import SidebarProfile from './SidebarProfile.jsx'
import OutputArea from './OutputArea.jsx'
import Header from "./Header.jsx"
import Icon from './Icon.jsx'
import '../index.css'
import downloadPDF from "../assets/download-as-PDF-icon.svg"
import OutputProfile from './OutputProfile.jsx'

export function AppControl ({children}) {

  const [resumeProfileData, setResumeProfileData] = useState({
    professional_name: '',
    email_address: '',
    phone_number: '',
    mission_statement: '',
  });

  const [resumeExperienceData, setResumeExperienceData] = useState({
    company_name: '',
    job_title: '',
    starting_date: '',
    worked_until: '',
    job_description: ''
  });

  const [resumeEducationData, setResumeEducationData] = useState({
    company_name: '',
    job_title: '',
    starting_date: '',
    worked_until: '',
    job_description: ''
  });

  const [resumeOtherData, setResumeOtherData] = useState({
    company_name: '',
    job_title: '',
    starting_date: '',
    worked_until: '',
    job_description: ''
  });

  return(
    <>
    <Sidebar>
        <SidebarProfile title="Profile" classes="sidebar-section profile"/>
        <SidebarSection title="Experience" classes="sidebar-section" type="rte"/>
        <SidebarSection title="Education" classes="sidebar-section" type="rte"/>
        <SidebarSection title="Other" classes="sidebar-section" type="rte"/>
      </Sidebar>
      <OutputArea>
        <Header>
          <Icon classes="icon icon__medium" source={downloadPDF} alt="Download as PDF icon" text="Print/Preview"/>
        </Header>
        <OutputProfile />
      </OutputArea>
    </>
    )
}

export default AppControl