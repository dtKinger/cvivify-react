import reactLogo from '../assets/react.svg'
import "../styles/Header.css"

function Header({children}) {

  return (
    <>
    <header className="header output-component">
    <div className="logo-structure">
          <h1 className="logo-h1">
            <span className="mini-reaction">
              <img src={reactLogo} className="logo react mini-reaction" alt="React logo" />
            </span>
            Avatar
          </h1>
      </div>
      {children}
    </header>
    </>
  )
}

export default Header