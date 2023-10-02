import { useState } from 'react';
import '../styles/OutputArea.css'

function OutputExperience({ experienceNodes }) {

  return (
    <div className="output-component">
      {experienceNodes.map((node, index) => (
        <div key={index} className="experience-node">
          <h2 className="company-name">{node.company_name}</h2>
          <h3 className="job-title">{node.job_title}</h3>
          <div className="job-dates">
            <span className="start-date">{node.starting_date} -</span>
            <span className="end-date"> {node.worked_until}</span>
          </div>
          <div className="profile-header__mission">
            <p className="job-description">{node.job_description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OutputExperience;
