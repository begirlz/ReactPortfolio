import React from "react";

function Resume() {

    return (

        <div className="container-fluid d-flex flex-sm-wrap justify-content-center col-lg-12">
            <div className="d-flex flex-column justify-content-center">
                <div className="container-fluid d-flex justify-content-center">
                    <h2 className="me-3 card-header"><strong>Download Resume
                    <a className="ms-4" href={'https://www.docdroid.net/ZziLl0V/jane-doe-resume-pdf'} download="resume.pdf">
                        <img src="https://img.icons8.com/ios/100/null/download-from-cloud--v1.png" alt="download" style={{ width: '50px', height: '50px' }} /></a></strong></h2>
                </div>
                <hr style={{
                    backgroundColor: '#0390fc',
                    height: 10,
                }} />
                <div className="d-flex justify-content-center">
                    <img className="container-fluid" src={'/img/skills.png'} alt="skills" />
                </div>
                <div className="d-flex justify-content-center">


                </div>
            </div>

        </div>


    )
}

export default Resume;