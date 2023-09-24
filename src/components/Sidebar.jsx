import '../styles/Sidebar.css'
import reactLogo from '../assets/react.svg'
function Sidebar ({children}) {

  return (
    
    <div className="sidebar">
      <div className="logo-structure">
          <h1 className="logo-h1">
            <span className="special-c">C</span>
            <br></br>
            <span className="mini-reaction">
              <img src={reactLogo} className="logo react mini-reaction" alt="React logo" />
            </span>
            viVify
          </h1>
      </div>
      {children}
    </div>
    
  )
}

export default Sidebar