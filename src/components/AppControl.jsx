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
import Experiences from '../data/experiences';

export function AppControl () {

  const handleAddExperienceNode = (zData) => {
    // Add a new experience node to the list
    setExperienceNodes([...Experiences, zData]);
  };

  const uniqueKey = () => crypto.randomUUID(); // Generates a uuid;

  const addSection = () => {
    sectionKey = uniqueKey();
    setExperienceNodes((prevState) => ({
      ...prevState,
      [sectionKey]: {
        job_title: '',  
        starting_date: '',
        worked_until: '',
        job_description: '',
      },
    }));
  };

  const handleProfileChange = (key, value) => {
    setResumeProfileData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  
  const handleExperienceChange = (sectionKey, key, value) => {
    setExperiences((prevExperiences) => ({
      ...prevExperiences,
      [sectionKey]: {
        ...prevExperiences[sectionKey],
        [key]: value,
      },
    }));
  };

  const [resumeProfileData, setResumeProfileData] = useState({
    professional_name: 'Michael Scott',
    email_address: 'mike@dundermifflin.com',
    phone_number: '+1 (234) 567-8910',
    mission_statement: "Don't ever, for any reason, do anything to anyone for any reason ever, no matter what, no matter where, or who, or who you are with, or where you are going, or where you've been... ever, for any reason whatsoever...",
  });

  const [experienceNodes, setExperienceNodes] = useState(Experiences); // State for storing experience nodes

  return(
    <>
      <Sidebar>
        <SidebarProfile
          onChange={handleProfileChange} 
          title="Profile"
          classes="sidebar-section profile"
          data={resumeProfileData} // Pass it back into Sidebar, because it's a controlled component
        />
        <SidebarSection
          sectionKey={uniqueKey} // Pass the unique key as a prop
          data={experienceNodes[uniqueKey]} // Use the data corresponding to the unique key
          onChange={handleExperienceChange}
          onAddNode={handleAddExperienceNode} // Pass the function to add nodes
          title="Experience"
          classes="sidebar-section"
        />
      
      </Sidebar>
      <OutputArea>
        <Header>
          <Icon classes="icon icon__medium" source={downloadPDF} alt="Download as PDF icon" text="Print/Preview"/>
        </Header>
        <OutputProfile data={resumeProfileData} />
        <OutputExperience experiencesArray={experienceNodes}/> 
      </OutputArea>
    </>
    )
}

export default AppControl