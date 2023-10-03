import { useState } from "react";
import "../styles/Sidebar.css"
import Experiences from "../data/experiences";

const InputContainer = ({ section, idCounter, sharedId, experiences, onChange, onRemoveNode }) => {
  
  const handleInputChange = (sharedId, key, value) => {
    onChange(sharedId, key, value); // Call the parent onChange to update AppControl state
  };

  const handleRemoveInput = () => {
    // Remove this node by calling the parent's removal function
    onRemoveNode(sharedId);
  };

  let jobId = `${section}-job-title-${idCounter}`;
  let companyId = `${section}-company-${idCounter}`;
  let startId = `${section}-start-date-${idCounter}`;
  let endId = `${section}-end-date-${idCounter}`;
  let textareaId = `${section}-text-area-${idCounter}` 

  return (
    <div key={sharedId} className="inputs-container">
      <button className="btn delete-btn" onClick={handleRemoveInput}>
        Remove
      </button>
      <label className="form-label form-label__company" htmlFor={companyId}>Company: </label>
      <input 
        id={companyId}
        className="form-input form-input__company"
        type="text"
        value={experiences[sharedId].company}
        onChange={(e) => handleInputChange(e.target.sharedId, "company", e.target.value)}
      />
      <label className="form-label form-label__job-title" htmlFor={jobId}>
        Your Role: 
      </label>
      <input
        className="form-input form-input__job-title"
        id={jobId}
        name={jobId}
        type="text"
        value={experiences[sharedId].job_title}
        onChange={(e) => handleInputChange("job_title", e.target.value)}
        // using the helper function handleChange which takes any prop as a key, then sets value
      />
      <label className="form-label form-label__start-date" htmlFor={startId}>
        From:
      </label>
      <input
        className="form-input form-input__start-date"
        id={startId}
        name={startId}
        type="date"
        value={experiences[sharedId].start_date}
        onChange={(e) => handleInputChange("starting_date", e.target.value)}
      />
      <label className="form-label form-label__end-date" htmlFor={endId}>
        To:
      </label>
      <input
        className="form-input form-input__end-date"
        id={endId}
        name={endId}
        type="date"
        value={experiences[sharedId].worked_until}
        onChange={(e) => handleInputChange("worked_until", e.target.value)}
      />
      <label className="form-label form-label__textarea" htmlFor={textareaId}>
        Describe your role:
      </label>
      <textarea
        id={textareaId}
        rows="10"
        className="textarea"
        value={experiences[sharedId].job_description}
        onChange={(e) => handleInputChange("job_description", e.target.value)}
      ></textarea>
    </div>
  );
}

export default InputContainer;