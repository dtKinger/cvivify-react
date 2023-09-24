import '../styles/Sidebar.css'

function SidebarProfile ({title, classes}) {


  
  return (
    <section className={classes}>
      <h2 className="title">{title}</h2>
      <div className="inputs-container">
        <label htmlFor="first-name">First Name</label>
        <input id="first-name" type="text" name="firstName">
        </input>

        <label htmlFor="last-name">Last Name</label>
        <input id="last-name" type="text" name="lastName"></input>
        
      </div>
    </section>
  )

}

export default SidebarProfile;