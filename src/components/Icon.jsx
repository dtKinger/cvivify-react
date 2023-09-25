import "../styles/Icons.css"

function handlePrintClick () {
  window.print();
}

function Icon ({classes, source, altText, text}) {
  
  return (
    <div className="icon-container" onClick={handlePrintClick}>
      <label htmlFor={text}>{text}</label>
      <img id={text} className={classes} src={source} alt={altText}></img>
    </div>
  )
}

export default Icon