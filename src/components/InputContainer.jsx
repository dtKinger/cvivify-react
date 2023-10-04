import { useState } from "react";
import "../styles/Sidebar.css"

const InputContainer = ({ section, data, onChange, onRemoveNode }) => {
// InputContainers
//    - input changes
//    - Remove button
//    - Rendered as a list

  const handleInputChange = (sharedId, key, value) => {
    console.log(sharedId)
    onChange(sharedId, key, value); // Call the parent onChange to update AppControl state
  };

  const handleRemoveInput = (sharedId) => {
    // Remove this node by calling the parent's removal function
    onRemoveNode(sharedId);
  };

  const InputContainerList = data.map((node) => (
    
    <div key={node.sharedId} className="inputs-container">
      <button className="btn delete-btn" onClick={(e) => handleRemoveInput(node.sharedId)}>
        Remove
      </button>
      <label className="form-label form-label__company" htmlFor={`${section}-company-${node.sharedId}`}>Company: </label>
      <input 
        id={`${section}-company-${node.sharedId}`}
        className="form-input form-input__company"
        name="company-name"
        type="text"
        value={node.company}
        onChange={(e) => handleInputChange(node.sharedId, "company", e.target.value)}
      />
      <label className="form-label form-label__job-title" htmlFor={`${section}-job-title-${node.sharedId}`}>
        Your Role: 
      </label>
      <input
        className="form-input form-input__job-title"
        id={`${section}-job-title-${node.sharedId}`}
        name="job-title"
        type="text"
        value={node.job_title}
        onChange={(e) => handleInputChange(node.sharedId, "job_title", e.target.value)}
        // using the helper function handleChange which takes any prop as a key, then sets value
      />
      <label className="form-label form-label__start-date" htmlFor={`${section}-start-date-${node.sharedId}`}>
        From:
      </label>
      <input
        className="form-input form-input__start-date"
        id={`${section}-start-date-${node.sharedId}`}
        name={node.startId}
        type="date"
        value={node.start_date}
        onChange={(e) => handleInputChange(node.sharedId, "start_date", e.target.value)}
      />
      <label className="form-label form-label__end-date" htmlFor={`${section}-end-date-${node.sharedId}`}>
        To:
      </label>
      <input
        className="form-input form-input__end-date"
        id={`${section}-end-date-${node.sharedId}`}
        type="date"
        name="end-date"
        value={node.worked_until}
        onChange={(e) => handleInputChange(node.sharedId, "worked_until", e.target.value)}
      />
      <label className="form-label form-label__textarea" htmlFor={`${section}-text-area-${node.sharedId}`}>
        Describe your role:
      </label>
      <textarea
        id={`${section}-text-area-${node.sharedId}`}
        rows="10"
        name="text-area"
        className="textarea"
        value={node.job_description}
        onChange={(e) => handleInputChange(node.sharedId, "job_description", e.target.value)}
      ></textarea>
    </div>
      
  ))

  

  return (
    <>
      {InputContainerList}
    </>
  );
}

export default InputContainer;