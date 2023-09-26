import '../styles/OutputArea.css'

function OutputProfile({ data }) {
  // Use the data received from props, with defaults
  const {
    professional_name = "Michael Scott",
    phone_number = "+1 (234) 567-8910",
    email_address = "mike@dundermifflin.com",
    mission_statement = "Don't ever, for any reason, do anything to anyone for any reason ever, no matter what, no matter where, or who, or who you are with, or where you are going, or where you've been... ever, for any reason whatsoever..."
  } = data;

  return (
    <div className="profile-output output-component">
      <div className="profile-header">
        <div className="profile-header__coords">
          <span className="email-address">{email_address}</span>
          <h2 className="professional-name">{professional_name}</h2>
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