import { useState } from 'react'
import '../styles/Sidebar.css'

function InputContainer (keyCounter, otherCounter, title) {

  console.log(otherCounter)
  let section ;
  let jobId = `job-title-${otherCounter}`
  let startId = `start-date-${otherCounter}`
  let endId = `end-date-${otherCounter}`

  return (
    <div key={keyCounter} className="inputs-container">
      <button className="btn delete-btn" onClick={handleRemoveInput}>Remove</button>
      <label className="form-label form-label__job-title" htmlFor="job-title">Your Role: </label>
      <input className="form-input form-input__job-title" id="job-title" name="job-title" type="text"></input>
      <label className="form-label form-label__start-date" htmlFor="start-date">From:</label>
      <input className="form-input form-input__start-date" id="start-date" name="start-date" type="date" />
      <label className="form-label form-label__end-date" htmlFor="end-date">To:</label>
      <input className="form-input form-input__end-date" id="end-date" name="end-date" type="date" />
      <label className="form-label form-label__textarea" htmlFor="textarea">Describe your role:</label>
      <textarea id="textarea" rows="10" className="textarea" placeholder="Your info here..."></textarea>
    </div>
  )
}

function handleRemoveInput (e) {
  e.target.closest('.inputs-container').remove();
}

function SidebarSection ({title, classes}) {
  
  const [keyCounter, setKeyCounter] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);
  const [inputContainerList, setInputContainerList] = useState([<InputContainer key={keyCounter}/>]);

  const handleAddBtnClick = () => {
    setKeyCounter(keyCounter + 1);
    setOtherCounter(otherCounter + 1);
    setInputContainerList(inputContainerList.concat(<InputContainer key={keyCounter + 1} />));
    
    return otherCounter;
  };

  return (
    otherCounter,
    <section className={classes}>
      <h2 className="title">{title}</h2>
      {inputContainerList}
      <button className="btn add-more" onClick={handleAddBtnClick}>Add +</button>
    </section>
  )
}

export default SidebarSection;