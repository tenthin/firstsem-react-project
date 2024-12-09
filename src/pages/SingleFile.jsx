import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const SingleFile = () => {
    // Use useParams to get the project id from the URL
    const { id } = useParams();

    // You can fetch the project details based on the id here (using static data for now)
    const projectData = {
        1: {
            name: "Bill Gates",
            image: `${process.env.PUBLIC_URL}/assests/project-1.png`,
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deserunt officia praesentium illo
                                amet magni cumque id saepe porro beatae!`,
            languages: 'HTML, CSS, JavaScript',
            link: 'https://example.com/project1',
            createdAt: 'January 2023'
        },
        2: {
            name: "Tamara Sredojevic",
            image: `${process.env.PUBLIC_URL}/assests/project-2.png`,
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deserunt officia praesentium illo
                                amet magni cumque id saepe porro beatae!`,
            languages: 'React, Node.js',
            link: 'https://example.com/project2',
            createdAt: 'February 2023'
        },
        3: {
            name: "Slum Train",
            image: `${process.env.PUBLIC_URL}/assests/project-3.png`,
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deserunt officia praesentium illo
                                amet magni cumque id saepe porro beatae!`,
            languages: 'Vue, Firebase',
            link: 'https://example.com/project3',
            createdAt: 'March 2023'
        },
        4: {
            name: "Bill Gates",
            image: `${process.env.PUBLIC_URL}/assests/project-1.png`,
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deserunt officia praesentium illo
                                amet magni cumque id saepe porro beatae!`,
            languages: 'HTML, CSS, JavaScript',
            link: 'https://example.com/project4',
            createdAt: 'January 2023'
        },
        5: {
            name: "Tamara Sredojevic",
            image: `${process.env.PUBLIC_URL}/assests/project-2.png`,
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deserunt officia praesentium illo
                                amet magni cumque id saepe porro beatae!`,
            languages: 'React, Node.js',
            link: 'https://example.com/project5',
            createdAt: 'February 2023'
        },
        6: {
            name: "Slum Train",
            image: `${process.env.PUBLIC_URL}/assests/project-3.png`,
            description: 'This is a description of Project 3.',
            languages: 'Vue, Firebase',
            link: 'https://example.com/project6',
            createdAt: 'March 2023'
        },
        7: {
            name: "Bill Gates",
            image: `${process.env.PUBLIC_URL}/assests/project-1.png`,
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deserunt officia praesentium illo
                                amet magni cumque id saepe porro beatae!`,
            languages: 'HTML, CSS, JavaScript',
            link: 'https://example.com/project7',
            createdAt: 'January 2023'
        },
        8: {
            name: "Tamara Sredojevic",
            image: `${process.env.PUBLIC_URL}/assests/project-2.png`,
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deserunt officia praesentium illo
                                amet magni cumque id saepe porro beatae!`,
            languages: 'React, Node.js',
            link: 'https://example.com/project8',
            createdAt: 'February 2023'
        },
        9: {
            name: "Slum Train",
            image: `${process.env.PUBLIC_URL}/assests/project-3.png`,
            description: 'This is a description of Project 3.',
            languages: 'Vue, Firebase',
            link: 'https://example.com/project9',
            createdAt: 'March 2023'
        },

    };

    const project = projectData[id];

    if (!project) {
        return <div>Project not found!</div>;
    }

    return (
        <div className="singlefile-container">
            <section className="singlefile-page">
                <h2>{project.name}</h2>
                <img src={project.image} alt="Project" />
                <div className="singlefile-text">
                    <p><strong>Description:</strong> {project.description}</p>
                    <p><strong>Tools Used:</strong> {project.languages}</p>
                    <p><strong>Launched Date:</strong> {project.createdAt}</p>
                    <p><strong>Link:</strong> <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></p>
                </div>
            </section>

            <section className="homeProject">
        <h2>MY PROJECT</h2>
        <div className="projectSection">
        <div class="card">
                        <img src={`${process.env.PUBLIC_URL}/assests/project-1.png`} alt="img" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deserunt officia praesentium illo
                            amet magni cumque id saepe porro beatae!</p>
                    </div>
                    <div class="card">
                        <img src={`${process.env.PUBLIC_URL}/assests/project-2.png`} alt="img" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deserunt officia praesentium illo
                            amet magni cumque id saepe porro beatae!</p>
                    </div>
                    <div class="card">
                        <img src={`${process.env.PUBLIC_URL}/assests/project-3.png`} alt="img" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deserunt officia praesentium illo
                            amet magni cumque id saepe porro beatae!</p>
                    </div>
            </div>
            <Link to="/project">SEE MORE...</Link>
      </section>
        </div>
    );
};

export default SingleFile;
