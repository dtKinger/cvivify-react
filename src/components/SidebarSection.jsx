import React, { Children, useState } from 'react';
import InputContainer from './InputContainer.jsx'
import '../styles/Sidebar.css';

function SidebarSection({ title, classes, onAddNode, children }) {
  const sharedId = crypto.randomUUID()

  const handleAddBtnClick = () => {
    const sharedId = crypto.randomUUID()

    let newNodeData = {
      sharedId: sharedId,
      job_title: "Your Role",
      company: "Institution",
      start_date: "From when",
      worked_until: "when?",
      job_description: "Tell us about it."
    };
    
    onAddNode(newNodeData)
  };

  return (
    <section className={classes}>
      <h2 className="title">{title}</h2>
      {children}
      <button className="btn add-more" onClick={handleAddBtnClick}>
        Add +
      </button>
    </section>
  );
}

export default SidebarSection;