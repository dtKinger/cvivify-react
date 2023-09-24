import { useState } from 'react'
import '../styles/Sidebar.css'

function InputContainer ({keyCounter}) {


  return (
    <div key={keyCounter} className="inputs-container">
      <button className="btn delete-btn" onClick={removeSection}>&times;</button>
      <textarea className="textarea" placeholder="Your info here..."></textarea>
    </div>
  )
}

function removeSection () {
  console.log(`Queued for deletion`)
}

function SidebarSection ({title, classes}) {

  const [keyCounter, setKeyCounter] = useState(0);
  const [inputContainerList, setInputContainerList] = useState([<InputContainer key={keyCounter}/>]);

  const handleAddBtnClick = () => {
    setKeyCounter(keyCounter + 1);
    setInputContainerList(inputContainerList.concat(<InputContainer key={keyCounter + 1} />));
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