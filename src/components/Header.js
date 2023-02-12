import React from "react";
import '../css/bootstrap.css';

function Header() {
    return (
        <header>
            <nav className="navbar  navbar-expand-lg navbar-dark bg-dark mb-2">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02"
                        aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarColor02">
                        <div className="navbar-nav me-auto">
                            <li className="nav-item">
                                <h1 className="text-white">Supapun</h1>
                            </li>
                        </div>
                        <div className="d-flex me-sm-2">
                            <div className="btn my-2 my-sm-0">
                                <a href="/" >
                                    <strong>About Me</strong>
                                </a>
                            </div>  
                        </div>
                        <div className="d-flex me-sm-2">
                            <div className="btn my-2 my-sm-0">
                                <a href="/" >
                                    <strong>Portfolio</strong>
                                </a>
                            </div>  
                        </div>
                        <div className="d-flex me-sm-2">
                            <div className="btn my-2 my-sm-0">
                                <a href="/" >
                                    <strong>Contact</strong>
                                </a>
                            </div>  
                        </div>
                        <div className="d-flex me-sm-2">
                            <div className="btn my-2 my-sm-0">
                                <a href="/" >
                                    <strong>Resume</strong>
                                </a>
                            </div>  
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;