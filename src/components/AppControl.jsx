import { useState } from "react";

export function AppControl ({children}) {

  const [resumeProfileData, setResumeProfileData] = useState({
    professional_name: '',
    email_address: '',
    phone_number: '',
    mission_statement: '',
  });

  const [resumeExperienceData, setResumeExperienceData] = useState({
    company_name: '',
    job_title: '',
    starting_date: '',
    worked_until: '',
    job_description: ''
  });

  const [resumeEducationData, setResumeEducationData] = useState({
    company_name: '',
    job_title: '',
    starting_date: '',
    worked_until: '',
    job_description: ''
  });

  const [resumeOtherData, setResumeOtherData] = useState({
    company_name: '',
    job_title: '',
    starting_date: '',
    worked_until: '',
    job_description: ''
  });

  return(
    <>
      {children}
    </>
    )
}

export default AppControl