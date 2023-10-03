import { useState } from 'react';
import '../styles/OutputArea.css'

function OutputExperience({ experiencesArray, sharedId }) {
console.log(experiencesArray)
  const ListOutputExperiences = experiencesArray.map((node, sharedId) => (
      <div key={sharedId} section-id={node.sharedId} className="experience-node">
        <h2 className="company-name"><span className="labels">Employer: </span>{node.company}</h2>
        <h3 className="job-title"><span className="labels">Role: </span>{node.job_title}</h3>
        <div className="job-dates">
          <span className="start-date"><span className="labels">From: </span>{node.starting_date} -</span>
          <span className="end-date"><span className="labels">Until: </span>{node.worked_until}</span>
        </div>
        <div className="profile-header__mission">
          <p className="job-description"><span className="labels">Description: </span>{node.job_description}</p>
        </div>
      </div>
    ))
  
  return (
    <div className="output-component">
      {ListOutputExperiences}
    </div>
  );
}

export default OutputExperience;
