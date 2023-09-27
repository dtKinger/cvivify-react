import React, { useState } from 'react';
import '../styles/Sidebar.css';

function InputContainer({ otherCounter, section }) {
  // Generate unique IDs based on otherCounter
  console.log(section)
  console.log({section})
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
      />
      <label className="form-label form-label__start-date" htmlFor={startId}>
        From:
      </label>
      <input
        className="form-input form-input__start-date"
        id={startId}
        name={startId}
        type="date"
      />
      <label className="form-label form-label__end-date" htmlFor={endId}>
        To:
      </label>
      <input
        className="form-input form-input__end-date"
        id={endId}
        name={endId}
        type="date"
      />
      <label className="form-label form-label__textarea" htmlFor={textareaId}>
        Describe your role:
      </label>
      <textarea
        id={textareaId}
        rows="10"
        className="textarea"
        placeholder="Your info here..."
      ></textarea>
    </div>
  );
}

function handleRemoveInput(e) {
  e.target.closest('.inputs-container').remove();
}

function SidebarSection({ title, classes }) {
  const [keyCounter, setKeyCounter] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);
  const [inputContainerList, setInputContainerList] = useState([
    <InputContainer key={keyCounter} otherCounter={otherCounter} section={title} />,
  ]);

  const handleAddBtnClick = () => {
    const newOtherCounter = otherCounter + 1;
    setKeyCounter(keyCounter + 1);
    setOtherCounter(newOtherCounter);
    setInputContainerList((prevList) => [
      ...prevList,
      <InputContainer key={keyCounter + 1} otherCounter={newOtherCounter} section={title}/>,
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
