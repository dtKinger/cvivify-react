
import "../styles/Header.css"

function Header({children}) {

  return (
    <>
    <header className="header output-component">
      {children}
    </header>
    </>
  )
}

export default Header