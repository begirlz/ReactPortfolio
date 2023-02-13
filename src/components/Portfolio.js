import React from "react";
import portfolio from '../Portfolio.json'
import ProjectCards from '../components/Project'
//import '../css/bootstrap.css';

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio() {
    return (
        <section className="container-fluid">
            <div className="project">
                <h2 className="card-title">Portfolio</h2>
                <hr style={{
                    color: '#000000',
                    backgroundColor: '#0390fc',
                    height: 10,
                    borderColor: '#000000'
                }} />
            </div>

            <Wrapper id="card-body">
                {portfolio.map((project) => (
                    <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics} />
                ))}
            </Wrapper>
        </section>
    )
}

export default Portfolio;