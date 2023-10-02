import { useState } from 'react';
import '../styles/OutputArea.css'


function OutputExperience ({data}) {
  const OutputExperienceNode = (data) => {
    return(
    <div className="output-component">
        <h2 className="company-name">{company_name}</h2>
        <h3 className="job-title">{job_title}</h3>
          <div className="job-dates">
            <span className="start-date">{starting_date} -</span>
            <span className="end-date"> {worked_until}</span>
          </div>
          <div className="profile-header__mission">
            <p className="job-description">{job_description}</p>
          </div>
      </div>
    )
  }

  // Use the data received from props, with defaults
  const {
    company_name,
    job_title,
    starting_date,
    worked_until,
    job_description,
  } = data;

  const [OutputExperienceList, setOutputExperienceList] = useState([
    <OutputExperienceNode key="0" data={data}/>
  ])

  const updateExperienceList = (e) => {
    setOutputExperienceList((prevList) => [
      ...prevList,
      <OutputExperienceNode />
    ]);
  }
  


  return (
    <>
    {OutputExperienceList}
    </>
    
  );
}

export default OutputExperience;