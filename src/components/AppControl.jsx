import { useState } from "react";
import Sidebar from "./Sidebar";
import SidebarProfile from "./SidebarProfile.jsx";
import SidebarSection from './SidebarSection.jsx'
import OutputArea from './OutputArea.jsx'
import OutputExperience from "./OutputExperience";
import InputContainer from "./InputContainer";
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

  const handleAddExperienceNode = (newNodeData) => {
    setExperiencesData((prevExperiences) => ([
      ...prevExperiences,
      newNodeData
    ]))
  };

  const handleAddEducationNode = (newNodeData) => {
    setEducationData((prevEducation) => ([
      ...prevEducation,
      newNodeData
    ]))
  };
  
  const handleExperienceChange = (sharedId, key, value) => {
    setExperiencesData((prevExperiences) =>
      prevExperiences.map((object) => {
        if (object.sharedId === sharedId) {
          return {
            ...object,
            [key]: value,
          };
        }
        return object;
      })
    );
  };

  const handleEducationChange = (sharedId, key, value) => {
    setEducationData((prevEducation) =>
      prevEducation.map((object) => {
        if (object.sharedId === sharedId) {
          return {
            ...object,
            [key]: value,
          };
        }
        return object;
      })
    );
  };

  const handleRemoveExperienceNode = (sharedId) => {
    setExperiencesData(oldValues => {
      return oldValues.filter(exp => exp.sharedId !== sharedId)
    })
  };

  const handleRemoveEducationNode = (sharedId) => {
    setEducationData(oldValues => {
      return oldValues.filter(exp => exp.sharedId !== sharedId)
    })
  };

  const [resumeProfileData, setResumeProfileData] = useState({
    professional_name: 'Michael Scott',
    email_address: 'mike@dundermifflin.com',
    phone_number: '+1 (234) 567-8910',
    mission_statement: "Don't ever, for any reason, do anything to anyone for any reason ever, no matter what, no matter where, or who, or who you are with, or where you are going, or where you've been... ever, for any reason whatsoever...",
  });
  
  const [experiencesData, setExperiencesData] = useState([
    {
      sharedId: 0,
      job_title: "Regional Manager",
      company: "Dunder Mifflin",
      start_date: "2005-05-13",
      worked_until: "2013-07-21",
      job_description: "While overseeing the regional office in Scranton, PA, Michael was responsible for leading Dunder Mifflin's team. His most notable achievements were using Dundie awards to motivate staff and quitting his job to start a competing business only to be rehired through an acquisition."
    }
  ]);

  const [educationData, setEducationData] = useState([
    {
      sharedId: 0,
      job_title: "Bachelor of Commerce",
      company: "Herbalife",
      start_date: "2001-05-13",
      worked_until: "2005-02-12",
      job_description: "In his real-world MBA, Michael moved product and recruits juniors to move more product and recruit more junior to move more... etc. etc..."
    }
  ]);
  
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
          onAddNode={handleAddExperienceNode} 
        >
          <InputContainer
            section="Experience"
            onChange={handleExperienceChange}
            onRemoveNode={handleRemoveExperienceNode}
            data={experiencesData}/>
        </SidebarSection>
        <SidebarSection
          title="Education"
          classes="sidebar-section"
          onAddNode={handleAddEducationNode}
        >
          <InputContainer
            section="Education"
            onChange={handleEducationChange}
            onRemoveNode={handleRemoveEducationNode}
            data={educationData}
          />
        </SidebarSection>
      
      </Sidebar>
      <OutputArea>
        <Header>
          <Icon classes="icon icon__medium" source={downloadPDF} alt="Download as PDF icon" text="Print/Preview"/>
        </Header>
        <OutputProfile data={resumeProfileData} />
        <OutputExperience section="Experience" experiencesArray={Object.values(experiencesData)} /> 
        <OutputExperience section="Education" experiencesArray={Object.values(educationData)} />
      </OutputArea>
    </>
    )
}

export default AppControl