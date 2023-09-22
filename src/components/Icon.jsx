import "../styles/Icons.css"


function Icon ({classes, source, altText}) {
  
  return (
    <img className={classes} src={source} alt={altText}></img>
  )
}

export default Icon