import React, { useState } from 'react';
import Experiences from '../data/experiences';
import InputContainer from './InputContainer.jsx'
import '../styles/Sidebar.css';

function SidebarSection({ title, classes, data, onChange, onAddNode, onRemoveNode }) {

  const [idCounter, setIdCounter] = useState(0);
  const [inputContainerList, setInputContainerList] = useState([
    <InputContainer
    sharedId={0}
    key={0}
    section={title}
    onChange={onChange}
    data={data}
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