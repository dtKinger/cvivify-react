import '../styles/OutputArea.css'

function OutputProfile ({
  professionalName="Michael Scott",
  phoneNumber="+1 (234) 567-8910",
  email="mike@dundermifflin.com",
  missionStatement="Don't ever, for any reason, do anything to anyone for any reason ever, no matter what, no matter where, or who, or who you are with, or where you are going, or where you've been... ever, for any reason whatsoever..."
})
{

  //
  return (
    <div className="profile-output output-component">
      <div className="profile-header">
        <div className="profile-header__coords">
          <span className="email-address">{email}</span>
          <h2 className="professional-name">{professionalName}</h2>
          <span className="phone">{phoneNumber}</span>  
        </div>
        <div className="profile-header__mission">
          <p className="mission-statement">{missionStatement}</p>
        </div>
      </div>
    </div>
  )
}

export default OutputProfile;