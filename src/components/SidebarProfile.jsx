import '../styles/Sidebar.css'

function SidebarProfile ({title, classes, data, onChange}) {

  const handleChange = (key, value) => {
    onChange(key, value);
  };

  return (
    <section className={classes}>
      <h2 className="title">{title}</h2>

      <div className="inputs-container">
        <label className="form-label form-label__professional-name" htmlFor="input-name">Professional Name: </label>
        <input
          id="input-name"
          type="text"
          name="professional-name"
          value={data.professional_name}
          onChange={(e) => handleChange("professional_name", e.target.value)} // This controls my input
          // using the helper function handleChange which takes any prop as a key, then sets value
        />
        <label className="form-label form-label__email" htmlFor="email">Email: </label>
        <input
          id="email"
          type="text"
          name="email"
          value={data.email_address}
          onChange={(e) => handleChange("email_address", e.target.value)} // This controls my input
          // using the helper function handleChange which takes any prop as a key, then sets value
        />
      </div>
    </section>
  )

}

export default SidebarProfile;