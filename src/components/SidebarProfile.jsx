import '../styles/Sidebar.css'

function SidebarProfile ({title, classes, data, onChange}) {

  
  const handleChange = (key, value) => {
    onChange(key, value);
  };

  return (
    <section className={classes}>
      <h2 className="title">{title}</h2>

      <div className="inputs-container">
        <label className="form-label" htmlFor="input-name">Professional Name: </label>
        <input
          id="input-name"
          type="text"
          name="professional-name"
          value={data.professional_name}
          onChange={(e) => handleChange("professional_name", e.target.value)} // This controls my input
          // using the helper function handleChange which takes any prop as a key, then sets value
        />
      </div>
    </section>
  )

}

export default SidebarProfile;

// return (
//   <input
//     value={firstName} // ...force the input's value to match the state variable...
//     onChange={e => setFirstName(e.target.value)} // ... and update the state variable on any edits!
//   />
// );