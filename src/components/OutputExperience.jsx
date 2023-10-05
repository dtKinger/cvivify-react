import { useState } from 'react';
import '../styles/OutputArea.css'

function OutputExperience({ experiencesArray }) {

  const ListOutputExperiences = experiencesArray.map((node) => (
      <div key={node.sharedId} section-id={node.sharedId} className="experience-node">
        <h3 className="job-title">{node.job_title}</h3>
        <p className="company-name">{node.company}</p>
        <div className="job-dates">
          <span className="start-date">{node.start_date} to </span>
          <span className="end-date">&nbsp;{node.worked_until}</span>
        </div>
        <div className="profile-header__mission">
          <p className="job-description">{node.job_description}</p>
        </div>
      </div>
    ))
  
  return (
    <div className="output-component">
      <h2>Experience</h2>
      {ListOutputExperiences}
    </div>
  );
}

export default OutputExperience;
