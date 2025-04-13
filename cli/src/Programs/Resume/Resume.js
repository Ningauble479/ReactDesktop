import './resume.css'

//Summary -------------------------------------------------------------------------------------------------------
//This component is a simple resume viewer that allows the user to view my resume.
// ----------------------------------------------------------------------------------------------------------------

export const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-header">
        <h2 className="resume-title">Resume</h2>
        <p className="resume-note">
          This is a general version of my resume. I tailor each version to match specific roles.
        </p>
      </div>

      <div className="resume-embed-container">
        <embed
          src="/resume.pdf"
          type="application/pdf"
          className="resume-pdf"
        />
      </div>
    </div>
  );
};