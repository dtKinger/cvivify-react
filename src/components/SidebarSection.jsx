import React, { useState } from 'react';
import InputContainer from './InputContainer.jsx'
import '../styles/Sidebar.css';

function SidebarSection({ onRemoveNode, onChange, title, classes, experiencesData, onAddNode }) {
  const sharedId = crypto.randomUUID()

  const [inputContainerList, setInputContainerList] = useState([
    <InputContainer
    key={0}
    sharedId={0}
    section={title}
    onChange={onChange}
    onRemoveNode={onRemoveNode}
    data={experiencesData}
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
    
    onAddNode(newNodeData)
    console.log(`sharedId is ${sharedId}`)
    console.info(experiencesData)

    setInputContainerList(prevContainers => ([
      ...prevContainers,
      <InputContainer 
      key={sharedId}
      sharedId={newNodeData.sharedId}
      section={title}
      onChange={onChange}
      onRemoveNode={onRemoveNode}
      data={experiencesData} 
      />
    ]))
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