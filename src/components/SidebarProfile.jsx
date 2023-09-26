import '../styles/Sidebar.css'

export function handleInputChange (e) {
  console.log(`The input changed`)
}

function SidebarProfile ({title, classes}) {

  return (
    <section className={classes}>
      <h2 className="title">{title}</h2>

      <div className="inputs-container">
        <label className="form-label" htmlFor="input-name">Professional Name: </label>
        <input id="input-name" type="text" name="name" onChange={handleInputChange}></input>
      </div>
    </section>
  )

}

export default SidebarProfile;