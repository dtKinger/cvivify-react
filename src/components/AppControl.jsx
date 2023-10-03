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
    setExperiences((prevExperiences) => ({
      ...prevExperiences,
      [zData.sharedId]: zData,
    }));
    console.log(Experiences)
  };

  const uniqueKey = () => crypto.randomUUID(); // Generates a uuid;

  const addSection = () => {
    const sharedId = uniqueKey();
    setExperiences((prevExperiences) => ({
      ...prevExperiences,
      [sharedId]: {
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
  
  const handleExperienceChange = (sharedId, key, value) => {
    console.log(`Handling change of :`)
    console.log(sharedId)
    console.log(key)
    console.log(value)
    setExperiences((prevExperiences) => ({
      ...prevExperiences,
      [sharedId]: {
        ...prevExperiences[sharedId],
        [key]: value,
      },
    }));
  };

  const handleRemoveExperienceNode = (sharedId) => {
    console.log(`Removing ${sharedId}`)
    const { [sharedId]: removedNode, ...restExperiences } = experiences;
    setExperiences(restExperiences);
  };

  const [resumeProfileData, setResumeProfileData] = useState({
    professional_name: 'Michael Scott',
    email_address: 'mike@dundermifflin.com',
    phone_number: '+1 (234) 567-8910',
    mission_statement: "Don't ever, for any reason, do anything to anyone for any reason ever, no matter what, no matter where, or who, or who you are with, or where you are going, or where you've been... ever, for any reason whatsoever...",
  });

  const [experiences, setExperiences] = useState(Experiences); // State for storing experience nodes
  const sharedId = uniqueKey();
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
          title="Experience"
          classes="sidebar-section"
          onChange={handleExperienceChange}
          onAddNode={handleAddExperienceNode} // Pass the function to add nodes
          onRemoveNode={handleRemoveExperienceNode} // Pass the function to remove nodes
          data={experiences}
        />
      
      </Sidebar>
      <OutputArea>
        <Header>
          <Icon classes="icon icon__medium" source={downloadPDF} alt="Download as PDF icon" text="Print/Preview"/>
        </Header>
        <OutputProfile data={resumeProfileData} />
        <OutputExperience experiencesArray={Object.values(experiences)}/> 
      </OutputArea>
    </>
    )
}

export default AppControl