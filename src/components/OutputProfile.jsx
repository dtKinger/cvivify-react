import '../styles/OutputArea.css'

function OutputProfile({ data }) {
  const {
    professional_name,
    phone_number,
    email_address,
    mission_statement,
  } = data;

  return (
    <div className="profile-output output-component">
      <div className="profile-header">
      <h2 className="professional-name">{professional_name}</h2>
        <div className="profile-header__coords">
          <span className="email-address">{email_address}</span>
          <span className="phone">{phone_number}</span>
        </div>
        <div className="profile-header__mission">
          <p className="mission-statement">{mission_statement}</p>
        </div>
      </div>
    </div>
  );
}

export default OutputProfile;