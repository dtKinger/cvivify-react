import '../styles/OutputArea.css'

function OutputProfile ({
  professionalName="Hans Gruber",
  phoneNumber="+1 (234) 567-8910",
  email="hello@mydomain.com"
})
{
  return (
    <div className="profile-output output-component">
      <div className="profile-header">
        <h2 className="professional-name">{professionalName}</h2>
        <span className="email-address">{email}</span>

      </div>
      

    </div>
  )
}

export default OutputProfile;