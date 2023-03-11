import React from "react";
import portfolio from '../Portfolio.json'
import ProjectCards from '../components/Project'

function PortfolioWrapper(props) {
    return <div className="d-flex flex-sm-wrap justify-content-center">{props.children}</div>;
}

function Portfolio() {
    return (
        <section className="container-fluid col-lg-12 mb-5">
            <div className="containe-fluid  d-flex flex-column">
                <h2 className="card-title"><strong>Portfolio</strong></h2>
                <hr style={{
                    backgroundColor: '#0390fc',
                    height: 10,
                }} />
            </div>

            <PortfolioWrapper id="" className="">
                {portfolio.map((project) => (
                    <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics} />
                ))}
            </PortfolioWrapper>


        </section>
    )
}

export default Portfolio;