import React from 'react';
import { Link } from 'react-router-dom';

const Project = () => {
    return (
        <div className="page-container">
            <section className='project-page'>
                <h1>PROJECT</h1>
                <div className="projectSection">
                    <div className="card" id="1">
                        <Link to={`/project/1`}>
                            <img src={`${process.env.PUBLIC_URL}/assests/Review.png`} alt="img" />
                            <h3>Interactive Rating Component</h3>
                            <p>This project is a simple yet interactive rating component built using HTML, CSS, and JavaScript.
                                The primary function is to allow users to provide feedback by selecting...</p>
                        </Link>
                    </div>
                    <div className="card" id="2">
                        <Link to={`/project/2`}>
                            <img src={`${process.env.PUBLIC_URL}/assests/WatchApp.png`} alt="img" />
                            <h3>LifeLink – Smartwatch Emotional Well-being Tracker</h3>
                            <p>LifeLink is a smartwatch application designed to monitor users' emotions
                                and provide personalized recommendations to enhance their well-being</p>
                        </Link>
                    </div>
                    <div className="card" id="3">
                        <Link to={`/project/3`}>
                            <img src={`${process.env.PUBLIC_URL}/assests/Blog.png`} alt="img" />
                            <h3>Blogger – Minimalist Blog Homepage</h3>
                            <p>Blogger is a clean and modern blog homepage designed to showcase articles in a structured and visually appealing layout.</p>
                        </Link>
                    </div>
                    {/* <div className="card" id="4">
                        <Link to={`/project/4`}>
                            <img src={`${process.env.PUBLIC_URL}/assests/project-1.png`} alt="img" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deserunt officia praesentium illo
                                amet magni cumque id saepe porro beatae!</p>
                        </Link>
                    </div>
                    <div className="card" id="5">
                        <Link to={`/project/5`}>
                            <img src={`${process.env.PUBLIC_URL}/assests/project-2.png`} alt="img" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deserunt officia praesentium illo
                                amet magni cumque id saepe porro beatae!</p>
                        </Link>
                    </div>
                    <div className="card" id="6">
                        <Link to={`/project/6`}>
                            <img src={`${process.env.PUBLIC_URL}/assests/project-3.png`} alt="img" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deserunt officia praesentium illo
                                amet magni cumque id saepe porro beatae!</p>
                        </Link>
                    </div>
                    <div className="card" id="7">
                        <Link to={`/project/7`}>
                            <img src={`${process.env.PUBLIC_URL}/assests/project-1.png`} alt="img" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deserunt officia praesentium illo
                                amet magni cumque id saepe porro beatae!</p>
                        </Link>
                    </div>
                    <div className="card" id="8">
                        <Link to={`/project/8`}>
                            <img src={`${process.env.PUBLIC_URL}/assests/project-2.png`} alt="img" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deserunt officia praesentium illo
                                amet magni cumque id saepe porro beatae!</p>
                        </Link>
                    </div>
                    <div className="card" id="9">
                        <Link to={`/project/9`}>
                            <img src={`${process.env.PUBLIC_URL}/assests/project-3.png`} alt="img" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deserunt officia praesentium illo
                                amet magni cumque id saepe porro beatae!</p>
                        </Link>
                    </div> */}
                </div>
            </section>
        </div>
    );
};

export default Project;
