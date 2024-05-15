import "./GreenButton.css";

const GreenButton = (props) => {
  console.log("[GreenButtonProps]", props);
  return (
    <div className="resume-button">
      <a
        className="button"
        href="../assets/Resume/ResumeOfficial.pdf"
        download="ResumeOfficial.pdf"
      >
        <button>
          <span className="transition"></span>
          <span className="gradient"></span>
          <span className="label">{props.children}</span>
        </button>
      </a>
    </div>
  );
};

export default GreenButton;
