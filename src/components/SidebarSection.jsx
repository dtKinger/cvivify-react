import React, { useState } from 'react';
import InputContainer from './InputContainer.jsx'
import '../styles/Sidebar.css';

function SidebarSection({ onRemoveNode, onChange, title, classes, experiencesData, onAddNode }) {

  const [idCounter, setIdCounter] = useState(0);
  const [inputContainerList, setInputContainerList] = useState([
    <InputContainer
    key={idCounter}
    idCounter={idCounter}
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
    console.log(`idCounter is: ${idCounter}`)
    console.log(`sharedId is ${sharedId}`)
    console.info(experiencesData)

    setIdCounter((prev) => prev + 1); // Use idCounter+1 in the snapshot, then increment it here asynchronously
    setInputContainerList(prevContainers => ([
      ...prevContainers,
      <InputContainer 
      key={sharedId}
      idCounter={idCounter}
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