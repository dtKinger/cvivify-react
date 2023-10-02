import { useState } from 'react';
import '../styles/OutputArea.css'


function OutputExperience ({data}) {

  // Use the data received from props, with defaults
  const {
    company_name,
    job_title,
    starting_date,
    worked_until,
    job_description,
  } = data;

  
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

export default OutputExperience;