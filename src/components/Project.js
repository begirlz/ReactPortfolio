import React from 'react';
import '../css/bootstrap.css';


// Individual Cards 
function ProjectCards(props) {

    return (
        <div className="card col-sm-3 mb-3">
            <h3 className="card-header">{props.name}</h3>
            <div className="card-body">
                <div className='d-flex justify-content-center'>
                    <img className='card-img' style={{ width: '90%', height: '250px' }}
                        alt={props.name} src={props.image} />

                </div>
                <div className='row'>
                    <p>({props.topics})</p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <a href={props.github}>
                        <img className="project-icon" src="https://img.icons8.com/ios/50/null/github--v1.png" alt="GitHub Repo" /></a>
                    <a href={props.deploy}>
                        <img className="project-icon" src="https://img.icons8.com/ios/50/null/domain--v1.png" alt="Live Application" /></a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCards;