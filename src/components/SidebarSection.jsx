import React, { useState } from 'react';
import '../styles/Sidebar.css';

function SidebarSection({ title, classes, data, onChange }) {

  const InputContainer = ({ otherCounter, section, data }) => {
  
    
    const handleRemoveInput = (e) => {
      e.target.closest('.inputs-container').remove();
    }
  
    // Generate unique IDs based on otherCounter and section title
    // This is not for React's keys, but for html form IDs to avoid conflicts.
    let jobId = `${section}-job-title-${otherCounter}`;
    let startId = `${section}-start-date-${otherCounter}`;
    let endId = `${section}-end-date-${otherCounter}`;
    let textareaId = `${section}-text-area-${otherCounter}` 
  
    return (
      <div className="inputs-container">
        <button className="btn delete-btn" onClick={handleRemoveInput}>
          Remove
        </button>
        <label className="form-label form-label__job-title" htmlFor={jobId}>
          Your Role: 
        </label>
        <input
          className="form-input form-input__job-title"
          id={jobId}
          name={jobId}
          type="text"
          value={data.job_title}
          onChange={(e) => onChange("job_title", e.target.value)} // This controls my input
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
          value={data.starting_date}
          onChange={(e) => handleChange("starting_date", e.target.value)}
        />
        <label className="form-label form-label__end-date" htmlFor={endId}>
          To:
        </label>
        <input
          className="form-input form-input__end-date"
          id={endId}
          name={endId}
          type="date"
          value={data.worked_until}
          onChange={(e) => handleChange("worked_until", e.target.value)}
        />
        <label className="form-label form-label__textarea" htmlFor={textareaId}>
          Describe your role:
        </label>
        <textarea
          id={textareaId}
          rows="10"
          className="textarea"
          value={data.job_description}
          onChange={(e) => handleChange("job_description", e.target.value)}
        ></textarea>
      </div>
    );
  }

  const handleChange = (key, value) => {
    onChange(key, value);
    console.log(`Hello Darkness`)
  };

  const [keyCounter, setKeyCounter] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);
  const [inputContainerList, setInputContainerList] = useState([
    <InputContainer
    key={keyCounter}
    otherCounter={otherCounter}
    section={title}
    data={data}
    onChange={onChange}
    />,
  ]);

  const handleAddBtnClick = () => {
    const newOtherCounter = otherCounter + 1;
    setKeyCounter(keyCounter + 1);
    setOtherCounter(newOtherCounter);
    setInputContainerList((prevList) => [
      ...prevList,
      <InputContainer
      key={keyCounter + 1}
      otherCounter={newOtherCounter}
      section={title}
      data // Leave this blank so additional sections don't load Michael Scott.
      onChange={onChange}
      />,
    ]);
  };

  return (
    <section className={classes}>
      <h2 className="title">{title}</h2>
      {inputContainerList}
      <button className="btn add-more" onClick={handleAddBtnClick}>
        Add +
      </button>
    </section>
  );
}

export default SidebarSection;
