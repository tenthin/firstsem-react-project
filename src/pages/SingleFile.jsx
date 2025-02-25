import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const SingleFile = () => {
    // Use useParams to get the project id from the URL
    const { id } = useParams();

    // You can fetch the project details based on the id here (using static data for now)
    const projectData = {
        1: {
            name: "Interactive Rating Component",
            image: `${process.env.PUBLIC_URL}/assests/Review.png`,
            description: `This project is a simple yet interactive rating component built using HTML, CSS, and JavaScript.
            The primary function is to allow users to provide feedback by selecting a rating from 1 to 5 and submitting it.
            Upon submission, the interface dynamically updates to display a "Thank You" message, acknowledging the user's input.`,
            languages: 'HTML, CSS, JavaScript',
            link: 'https://frontendmentor-rating-system.netlify.app/',
            createdAt: 'January 2023'
        },
        2: {
            name: "LifeLink – Smartwatch Emotional Well-being Tracker",
            image: `${process.env.PUBLIC_URL}/assests/WatchApp.png`,
            description: `LifeLink is a smartwatch application designed to monitor users' emotions and provide personalized recommendations to enhance their well-being. Through intelligent tracking and analysis, the app offers users actionable suggestions to improve their mood and mental state.`,
            languages: 'React, Node.js',
            link: 'https://www.figma.com/proto/C6s1VRlfkyD7BuNHaQs8d6/LifeLink?node-id=416-6400&t=yYmkxwss7qHxMclv-1&scaling=scale-down&content-scaling=fixed&page-id=415%3A980&starting-point-node-id=416%3A6400',
            createdAt: 'February 2023'
        },
        3: {
            name: "Blogger – Minimalist Blog Homepage",
            image: `${process.env.PUBLIC_URL}/assests/Blog.png`,
            description: `Blogger is a clean and modern blog homepage designed to showcase articles in a structured and visually appealing layout. The project focuses on simplicity, readability, and responsiveness, making it a great platform for content presentation.`,
            languages: 'HTML, CSS, JavaScript, React',
            link: 'https://frontendmentor-blogger.netlify.app/',
            createdAt: 'March 2023'
        },
        // 4: {
        //     name: "Bill Gates",
        //     image: `${process.env.PUBLIC_URL}/assests/project-1.png`,
        //     description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deserunt officia praesentium illo
        //                         amet magni cumque id saepe porro beatae!`,
        //     languages: 'HTML, CSS, JavaScript',
        //     link: 'https://example.com/project4',
        //     createdAt: 'January 2023'
        // },
        // 5: {
        //     name: "Tamara Sredojevic",
        //     image: `${process.env.PUBLIC_URL}/assests/project-2.png`,
        //     description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deserunt officia praesentium illo
        //                         amet magni cumque id saepe porro beatae!`,
        //     languages: 'React, Node.js',
        //     link: 'https://example.com/project5',
        //     createdAt: 'February 2023'
        // },
        // 6: {
        //     name: "Slum Train",
        //     image: `${process.env.PUBLIC_URL}/assests/project-3.png`,
        //     description: 'This is a description of Project 3.',
        //     languages: 'Vue, Firebase',
        //     link: 'https://example.com/project6',
        //     createdAt: 'March 2023'
        // },
        // 7: {
        //     name: "Bill Gates",
        //     image: `${process.env.PUBLIC_URL}/assests/project-1.png`,
        //     description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deserunt officia praesentium illo
        //                         amet magni cumque id saepe porro beatae!`,
        //     languages: 'HTML, CSS, JavaScript',
        //     link: 'https://example.com/project7',
        //     createdAt: 'January 2023'
        // },
        // 8: {
        //     name: "Tamara Sredojevic",
        //     image: `${process.env.PUBLIC_URL}/assests/project-2.png`,
        //     description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deserunt officia praesentium illo
        //                         amet magni cumque id saepe porro beatae!`,
        //     languages: 'React, Node.js',
        //     link: 'https://example.com/project8',
        //     createdAt: 'February 2023'
        // },
        // 9: {
        //     name: "Slum Train",
        //     image: `${process.env.PUBLIC_URL}/assests/project-3.png`,
        //     description: 'This is a description of Project 3.',
        //     languages: 'Vue, Firebase',
        //     link: 'https://example.com/project9',
        //     createdAt: 'March 2023'
        // },

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
                    <p><strong>Project Overview:</strong> {project.description}</p>
                    <p><strong>Tools Used:</strong> {project.languages}</p>
                    <p><strong>Launched Date:</strong> {project.createdAt}</p>
                    <p><strong>Check out live project:</strong> <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></p>
                </div>
            </section>

            <section className="homeProject">
                <h1>PROJECT</h1>
                <div className="projectSection">
                    <div class="card">
                        <img src={`${process.env.PUBLIC_URL}/assests/Review.png`} alt="img" />
                        <h3>Interactive Rating Component</h3>
                        <p>This project is a simple yet interactive rating component built using HTML, CSS, and JavaScript.
                            The primary function is to allow users to provide feedback by selecting...</p>
                    </div>
                    <div class="card">
                        <img src={`${process.env.PUBLIC_URL}/assests/WatchApp.png`} alt="img" />
                        <h3>LifeLink – Smartwatch Emotional Well-being Tracker</h3>
                        <p>LifeLink is a smartwatch application designed to monitor users' emotions
                            and provide personalized recommendations to enhance their well-being</p>
                    </div>
                    <div class="card">
                        <img src={`${process.env.PUBLIC_URL}/assests/Blog.png`} alt="img" />
                        <h3>Blogger – Minimalist Blog Homepage</h3>
                        <p>Blogger is a clean and modern blog homepage designed to showcase articles in a structured and visually appealing layout.</p>
                    </div>
                </div>
                <Link className='link' to="/project">CLICK FOR MORE...</Link>
            </section>
        </div>
    );
};

export default SingleFile;
