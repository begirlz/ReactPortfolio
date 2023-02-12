import React from "react";
import '../css/bootstrap.css';

function Footer() {
    return (
        <footer className="d-flex bg-dark fixed-bottom footer justify-content-center">
            <div className="d-flex me-sm-2">
                <div className="btn my-2 my-sm-0">
                    <a href="/" >
                        <strong>GitHub</strong>
                    </a>
                </div>
            </div>
            <div className="d-flex me-sm-2">
                <div className="btn my-2 my-sm-0">
                    <a href="/" >
                        <strong>LinkedIn</strong>
                    </a>
                </div>
            </div>
            <div className="d-flex me-sm-2">
                <div className="btn my-2 my-sm-0">
                    <a href="/" >
                        <strong>Facebook</strong>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;;