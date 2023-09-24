import '../styles/Sidebar.css'

function SidebarProfile ({title, classes}) {
  
  return (
    <section className={classes}>
      <h2 className="title">{title}</h2>

      <div className="inputs-container">
        <label className="form-label" htmlFor="name">Professional Name: </label>
        <input id="input-name" type="text" name="name"></input>
      </div>
    </section>
  )

}

export default SidebarProfile;