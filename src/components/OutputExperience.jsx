import { useState } from 'react';
import '../styles/OutputArea.css'

function OutputExperience({ experienceNodes }) {

  return (
    <div className="output-component">
      {experienceNodes.map((node, index) => (
        <div key={index} className="experience-node">
          <h2 className="company-name"><span className="labels">Employer: </span>{node.company_name}</h2>
          <h3 className="job-title"><span className="labels">Role: </span>{node.job_title}</h3>
          <div className="job-dates">
            <span className="start-date"><span className="labels">From: </span>{node.starting_date} -</span>
            <span className="end-date"><span className="labels">Until: </span>{node.worked_until}</span>
          </div>
          <div className="profile-header__mission">
            <p className="job-description"><span className="labels">Description: </span>{node.job_description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OutputExperience;
