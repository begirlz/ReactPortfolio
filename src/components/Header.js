import React from "react";
import { Link } from "react-router-dom";// no reloading page
import '../css/bootstrap.css';
import '../App.css';

function Header() {

    const [isCollapse, setisCollapse] = React.useState(false)

    return (

        <header>
            <nav className="navbar  navbar-expand-lg navbar-dark mb-2">

                <div className="navbar">
                    <div className="ms-3">
                        <h1 className="text-dark">
                            Jane Doe
                        </h1>         
                    </div>
                </div>

                <button className={`navbar-toggler ${isCollapse ? '' : ''}`}
                    type="button"
                    onClick={() => {
                        setisCollapse(!isCollapse)
                    }}
                    data-bs-target="#navbarColor02"
                    aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>

                <div className={`navbar-collapse ${isCollapse ? '' : 'collapse'} justify-content-end `}
                    id="navbarColor02">
                    <div className="navbar-nav d-flex me-sm-2 ">
                        <div className="btn my-2 my-sm-0">
                            <Link
                                to="About"
                                className=""
                                spy="true"
                                smooth="true"
                            >
                                <strong>About ME</strong>
                            </Link>
                        </div>
                    </div>
                    <div className="navbar-nav d-flex me-sm-2 ">
                        <div className="btn my-2 my-sm-0">
                            <Link
                                to="Portfolio"
                                className=""
                                spy="true"
                                smooth="true"
                            >
                                <strong>Portfolio</strong>
                            </Link>
                        </div>
                    </div>
                    <div className="navbar-nav d-flex me-sm-2 ">
                        <div className="btn my-2 my-sm-0">
                            <Link
                                to="Contact"
                                className=""
                                spy="true"
                                smooth="true"
                            >
                                <strong>Contact</strong>
                            </Link>
                        </div>
                    </div>
                    <div className="navbar-nav d-flex me-sm-2 ">
                        <div className="btn my-2 my-sm-0">
                            <Link
                                to="Resume"
                                className=""
                                spy="true"
                                smooth="true"
                            >
                                <strong>Resume</strong>
                            </Link>
                        </div>
                    </div>

                </div>

            </nav>
        </header>
    );
}

export default Header;