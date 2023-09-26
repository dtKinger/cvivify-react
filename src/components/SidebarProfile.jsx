import '../styles/Sidebar.css'

function SidebarProfile ({title, classes, data, onChange}) {

  const handleChange = (key, value) => {
    console.log(value.length)
    if (key == 'professional_name' && value.length < 30){
      onChange(key, value);
    } else if (key == 'email' && value.length < 30){
      onChange(key, value);
    } else if (key == 'phone_number' && value.length <= 18){
      onChange(key, value);
    } else if (key == 'mission_statement' && value.length <= 500){
      onChange(key, value);
    }
  };

  return (
    <section className={classes}>
      <h2 className="title">{title}</h2>

      <div className="inputs-container">
        <label className="form-label form-label__professional-name" htmlFor="input-name">Professional Name: </label>
        <input
          min="2"
          max="30"
          id="input-name"
          type="text"
          name="professional-name"
          value={data.professional_name}
          minrange="2"
          maxrange="30"
          onChange={(e) => handleChange("professional_name", e.target.value)} // This controls my input
          // using the helper function handleChange which takes any prop as a key, then sets value
        />
        <label className="form-label form-label__email" htmlFor="email">Email: </label>
        <input
          id="email"
          type="text"
          name="email"
          value={data.email_address}
          onChange={(e) => handleChange("email_address", e.target.value)}
        />
        <label className="form-label form-label__phone" htmlFor="phone">Phone: </label>
        <input
          min="9"
          max="18"
          id="phone"
          type="text"
          name="phone"
          value={data.phone_number}
          onChange={(e) => handleChange("phone_number", e.target.value)}
        />
        <label className="form-label form-label__mission" htmlFor="mission">Mission: <span>&nbsp;&nbsp; {data.mission_statement.length}/ 500 limit</span></label>
        <textarea
          rows="8"
          id="mission"
          type="text"
          name="mission"
          value={data.mission_statement}
          onChange={(e) => handleChange("mission_statement", e.target.value)}
        />
      </div>
    </section>
  )

}

export default SidebarProfile;