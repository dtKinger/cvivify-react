import React, { useState } from 'react';
import Experiences from '../data/experiences';
import '../styles/Sidebar.css';

function SidebarSection({ title, classes, data, onChange, onAddNode }) {

  const InputContainer = ({ section, idCounter, sharedId }) => {
  
    const handleInputChange = (sharedId, key, value) => {
      setExperiences[sharedId]((prevData) => ({
        ...prevData,
        [key]: value
      }));
      onChange(sharedId, key, value); // Call the parent onChange to update AppControl state
    };

    const handleRemoveInput = (e) => {
      e.target.closest('.inputs-container').remove();
    }
  
    let jobId = `${section}-job-title-${idCounter}`;
    let companyId = `${section}-company-${idCounter}`;
    let startId = `${section}-start-date-${idCounter}`;
    let endId = `${section}-end-date-${idCounter}`;
    let textareaId = `${section}-text-area-${idCounter}` 
  
    return (
      <div className="inputs-container">
        <button className="btn delete-btn" onClick={handleRemoveInput}>
          Remove
        </button>
        <label className="form-label form-label__company" htmlFor={companyId}>Company: </label>
        <input id={companyId} className="form-input form-input__company" type="text" />
        <label className="form-label form-label__job-title" htmlFor={jobId}>
          Your Role: 
        </label>
        <input
          className="form-input form-input__job-title"
          id={jobId}
          name={jobId}
          type="text"
          value={Experiences[0].job_title}
          onChange={(e) => handleInputChange(sharedId, "job_title", e.target.value)}
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
          value={Experiences[0].start_date}
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

  const [idCounter, setIdCounter] = useState(0);
  const [inputContainerList, setInputContainerList] = useState([
    <InputContainer
    sharedId={0}
    key={0}
    section={title}
    data={data}
    onChange={onChange}
    />,
  ]);

  const handleAddBtnClick = () => {

    // Create a new node data object
    const newNodeData = {
      sharedId: crypto.randomUUID(),
      job_title: "",
      company: "",
      start_date: "",
      worked_until: "",
      job_description: ""
    };

    // Push it into Experiences data
    onAddNode(newNodeData);

    setIdCounter((prev) => prev + 1);
    setInputContainerList((prevList) => [
      ...prevList,
      <InputContainer
      key={idCounter + 1}
      section={title}
      idCounter={idCounter + 1}
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