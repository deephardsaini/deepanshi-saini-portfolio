import React from 'react'
import "./ResumeButton.css"


const CustomButton = () => {
    return (
        <div className="resume-button">
            <a className="button" href="../assets/Resume/ResumeOfficial.pdf" download="ResumeOfficial.pdf">
                <button>
                    <span className="transition"></span>
                    <span className="gradient"></span>
                    <span className="label">Resume</span>
                </button>
            </a>
        </div>
    );
}

export default CustomButton
