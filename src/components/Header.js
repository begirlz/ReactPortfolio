import React from "react";
import { Link } from "react-router-dom";// no reloading page
import '../css/bootstrap.css';
import '../App.css';

function Header() {

    const [isCollapse, setisCollapse] = React.useState(false)

    return (

        <header>
            <nav className="navbar  navbar-expand-lg navbar-dark mb-2">
                <div className="container-fluid">
                    <button className={`navbar-toggler ${isCollapse ? '' : ''}`}
                        type="button"
                        onClick={() => {
                            setisCollapse(!isCollapse)
                        }}
                        data-bs-target="#navbarColor02"
                        aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-nav me-auto">
                        <li className="nav-item">
                            <h1 className="text-dark">
                                <strong>Jane Doe</strong>
                            </h1>
                        </li>
                    </div>
                    <div className={`navbar-collapse ${isCollapse ? '' : 'collapse'}`}
                        id="navbarColor02">
                        <div className="d-flex me-sm-2">
                            <div className="btn my-2 my-sm-0">
                                <Link
                                    to="About"
                                    className=""
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                >
                                    <strong>About ME</strong>
                                </Link>
                            </div>
                        </div>
                        <div className="d-flex me-sm-2">
                            <div className="btn my-2 my-sm-0">
                                <Link
                                    to="Portfolio"
                                    className=""
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                >
                                    <strong>Portfolio</strong>
                                </Link>
                            </div>
                        </div>
                        <div className="d-flex me-sm-2">
                            <div className="btn my-2 my-sm-0">
                                <Link
                                    to="Contact"
                                    className=""
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                >
                                    <strong>Contact</strong>
                                </Link>
                            </div>
                        </div>
                        <div className="d-flex me-sm-2">
                            <div className="btn my-2 my-sm-0">
                                <Link
                                    to="Resume"
                                    className=""
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                >
                                    <strong>Resume</strong>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;