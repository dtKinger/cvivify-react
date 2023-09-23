import '../styles/OutputArea.css'

function OutputArea ({children}) {
  return (
    <div className="output-container">
      {children}
    </div>
  )
}

export default OutputArea;