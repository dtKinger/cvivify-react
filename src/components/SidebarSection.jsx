import React, { useState } from 'react';
import Experiences from '../data/experiences';
import '../styles/Sidebar.css';

function SidebarSection({ title, classes, data, onChange, onAddNode }) {

  const InputContainer = ({ section, keyCounter }) => {
  
    const handleInputChange = (key, value) => {
      setExperiences[0]((prevData) => ({
        ...prevData,
        [key]: value
      }));
      onChange(sectionKey, key, value); // Call the parent onChange to update AppControl state
    };

    const handleRemoveInput = (e) => {
      e.target.closest('.inputs-container').remove();
    }
  
    let jobId = `${section}-job-title-${keyCounter}`;
    let startId = `${section}-start-date-${keyCounter}`;
    let endId = `${section}-end-date-${keyCounter}`;
    let textareaId = `${section}-text-area-${keyCounter}` 
  
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
          value={Experiences[0].job_title}
          onChange={(e) => handleInputChange(sectionKey, "job_title", e.target.value)}
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
          value={Experiences[0].starting_date}
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
          value={Experiences[0].worked_until}
          onChange={(e) => handleInputChange("worked_until", e.target.value)}
        />
        <label className="form-label form-label__textarea" htmlFor={textareaId}>
          Describe your role:
        </label>
        <textarea
          id={textareaId}
          rows="10"
          className="textarea"
          value={Experiences[0].job_description}
          onChange={(e) => handleInputChange("job_description", e.target.value)}
        ></textarea>
      </div>
    );
  }

  const [keyCounter, setKeyCounter] = useState(0);
  const [inputContainerList, setInputContainerList] = useState([
    <InputContainer
    key={keyCounter}
    section={title}
    data={data}
    onChange={onChange}
    />,
  ]);

  const handleAddBtnClick = () => {
    setKeyCounter((prev) => prev + 1);

    // Create a new node data object
    const newNodeData = {
      sectionKey: crypto.randomUUID(),
      job_title: "",
      company: "",
      start_date: "",
      worked_until: "",
      job_description: ""
    };

    // Push it into Experiences data
    onAddNode(newNodeData);

    setInputContainerList((prevList) => [
      ...prevList,
      <InputContainer
      key={keyCounter + 1}
      section={title}
      keyCounter={keyCounter + 1}
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