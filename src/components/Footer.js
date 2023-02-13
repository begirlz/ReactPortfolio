import React from "react";
import '../css/bootstrap.css';

function Footer() {
    return (
        <footer className="d-flex fixed-bottom footer justify-content-center">
            <div className="d-flex me-sm-2">
                <div className="mx-auto">
                    <a href="https://github.com/begirlz"><img src="https://img.icons8.com/ios/50/null/github--v1.png" alt="Github" /></a>
                </div>
            </div>
            <div className="d-flex me-sm-2">
                <div className="mx-auto">
                    <a href="https://linkedin.com"><img src="https://img.icons8.com/ios/50/null/linkedin.png" alt="LinkedIn" /></a>        
                    
                </div>
            </div>
            <div className="d-flex me-sm-2">
                <div className="mx-auto">
                    <a href="https://facebook.com" >
                    <img src="https://img.icons8.com/ios/50/null/facebook-new.png" alt="FaceBook"/>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;;