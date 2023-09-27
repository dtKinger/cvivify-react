import { useState } from "react";
import Sidebar from "./Sidebar";
import SidebarProfile from "./SidebarProfile.jsx";
import SidebarSection from './SidebarSection.jsx'
import OutputArea from './OutputArea.jsx'
import OutputExperience from "./OutputExperience";
import Header from "./Header.jsx"
import Icon from './Icon.jsx'
import '../index.css'
import downloadPDF from "../assets/download-as-PDF-icon.svg"
import OutputProfile from './OutputProfile.jsx'

export function AppControl () {

  const handleProfileChange = (key, value) => {
    setResumeProfileData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  
  const [resumeProfileData, setResumeProfileData] = useState({
    professional_name: 'Michael Scott',
    email_address: 'mike@dundermifflin.com',
    phone_number: '+1 (234) 567-8910',
    mission_statement: "Don't ever, for any reason, do anything to anyone for any reason ever, no matter what, no matter where, or who, or who you are with, or where you are going, or where you've been... ever, for any reason whatsoever...",
  });

  const [resumeExperienceData, setResumeExperienceData] = useState({
    company_name: 'Dunder Mifflin',
    job_title: 'Regional Manager',
    starting_date: '2004-03-24',
    worked_until: '2013-05-16',
    job_description: 'Somehow I managed.'
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
        <SidebarProfile
          onChange={handleProfileChange} 
          title="Profile"
          classes="sidebar-section profile"
          data={resumeProfileData} // Pass it back into Sidebar, because it's a controlled component
        />
        <SidebarSection title="Experience" classes="sidebar-section" type="rte"/>
        <SidebarSection title="Education" classes="sidebar-section" type="rte"/>
        <SidebarSection title="Other" classes="sidebar-section" type="rte"/>
      </Sidebar>
      <OutputArea>
        <Header>
          <Icon classes="icon icon__medium" source={downloadPDF} alt="Download as PDF icon" text="Print/Preview"/>
        </Header>
        <OutputProfile data={resumeProfileData} /> {/* Pass the data as a prop */}
        <OutputExperience data={resumeExperienceData} />
      </OutputArea>
    </>
    )
}

export default AppControl