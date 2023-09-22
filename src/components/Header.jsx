import reactLogo from '../assets/react.svg'
import "../styles/Header.css"
import '../styles/Counter.css'

function Header({children}) {

  return (
    <>
    <div className="logo-structure">
        <h1 className="logo-h1">
          <span className="special-c">C</span>
          <br></br>
          <span className="mini-reaction">
            <img src={reactLogo} className="logo react mini-reaction" alt="React logo" />
          </span>
          viVify
        </h1>
        {children}
      </div>
    </>
  )
}

export default Header