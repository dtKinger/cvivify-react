import React, { useState } from 'react';
import InputContainer from './InputContainer.jsx'
import '../styles/Sidebar.css';

function SidebarSection({ onRemoveNode, onChange, title, classes, experiences, onAddNode }) {

  const [idCounter, setIdCounter] = useState(0);
  const [inputContainerList, setInputContainerList] = useState([
    <InputContainer
    sharedId={0}
    key={idCounter}
    section={title}
    onChange={onChange}
    onRemoveNode={onRemoveNode}
    experiences={experiences}
    />,
  ]);

  const handleAddBtnClick = () => {

    const sharedId = crypto.randomUUID()

    let newNodeData = {
      sharedId: sharedId,
      job_title: "Your Role",
      company: "Your Employer",
      start_date: "",
      worked_until: "",
      job_description: "Tell us about it."
    };
    

    setInputContainerList(prevContainers => ([
      ...prevContainers,
      <InputContainer key={sharedId} />
    ]))

    onAddNode(newNodeData)

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