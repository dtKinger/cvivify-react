import { useState } from 'react'
import '../styles/Sidebar.css'

function InputContainer () {


  return (
    <div className="inputs-container">
    <button className="btn delete-btn" onClick={removeSection}>&times;</button>
    <textarea className="textarea" key='0' placeholder="Your info here..."></textarea>
  </div>
  )
}

function removeSection () {
  console.log(`Queued for deletion`)
}

function SidebarSection ({title, classes}) {

  const [inputContainerList, setInputContainerList] = useState([<InputContainer key="0"/>]);

  const handleAddBtnClick = (e) => {
    setInputContainerList(inputContainerList.concat(<InputContainer key={inputContainerList.length} />));
  };

  return (
    <section className={classes}>
      <h2 className="title">{title}</h2>
      {inputContainerList}
      <button className="btn add-more" onClick={handleAddBtnClick}>Add +</button>
    </section>
  )
}

export default SidebarSection;