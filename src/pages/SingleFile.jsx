import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleFile = () => {
  // Use useParams to get the project id from the URL
  const { id } = useParams();

  // You can fetch the project details based on the id here (using static data for now)
  const projectData = {
    1: {
      name: "Favorite Movie App",
      image: `${process.env.PUBLIC_URL}/assests/FavMovieAPI.png`,
      description: `A responsive web application built with React.js that allows users to browse movies and manage their list of favorites. Movies are fetched from a public API, and users can toggle favorites with a simple click. Favorite selections are reflected in a dedicated section and updated in real-time.`,
      languages: "HTML, CSS, JavaScript",
      link: "https://681d6b8997672412efc936e5--symphonious-bavarois-46031a.netlify.app/",
      github: "https://github.com/tenthin/favorite-movie",
      createdAt: "May 2025",
    },
    2: {
      name: "Interactive Rating Component",
      image: `${process.env.PUBLIC_URL}/assests/Review.png`,
      description: `This project is a simple yet interactive rating component built using HTML, CSS, and JavaScript.
            The primary function is to allow users to provide feedback by selecting a rating from 1 to 5 and submitting it.
            Upon submission, the interface dynamically updates to display a "Thank You" message, acknowledging the user's input.`,
      languages: "HTML, CSS, JavaScript",
      link: "https://frontendmentor-rating-system.netlify.app/",
      github: "https://github.com/tenthin/frontendmentor-rating-component",
      createdAt: "January 2023",
    },
    3: {
      name: "LifeLink – Smartwatch Emotional Well-being Tracker",
      image: `${process.env.PUBLIC_URL}/assests/WatchApp.png`,
      description: `LifeLink is a smartwatch application designed to monitor users' emotions and provide personalized recommendations to enhance their well-being. Through intelligent tracking and analysis, the app offers users actionable suggestions to improve their mood and mental state.`,
      languages: "React, Node.js",
      link: "https://www.figma.com/proto/C6s1VRlfkyD7BuNHaQs8d6/LifeLink?node-id=416-6400&t=yYmkxwss7qHxMclv-1&scaling=scale-down&content-scaling=fixed&page-id=415%3A980&starting-point-node-id=416%3A6400",
      createdAt: "February 2023",
    },
    4: {
      name: "Blogger – Minimalist Blog Homepage",
      image: `${process.env.PUBLIC_URL}/assests/Blog.png`,
      description: `Blogger is a clean and modern blog homepage designed to showcase articles in a structured and visually appealing layout. The project focuses on simplicity, readability, and responsiveness, making it a great platform for content presentation.`,
      languages: "HTML, CSS, JavaScript, React",
      link: "https://frontendmentor-blogger.netlify.app/",
      github: "https://github.com/tenthin/frontendmentor-blogger",
      createdAt: "March 2023",
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
          <p>
            <strong>Project Overview:</strong> {project.description}
          </p>
          <p>
            <strong>Tools Used:</strong> {project.languages}
          </p>
          <p>
            <strong>Launched Date:</strong> {project.createdAt}
          </p>
          <p>
            <strong>Github Link:</strong>{" "}
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              {project.github}
            </a>
          </p>
          <p>
            <strong>Check out live project:</strong>{" "}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.link}
            </a>
          </p>
        </div>
      </section>

      <section className="homeProject">
        <h1>PROJECT</h1>
        <div className="projectSection">
          <div class="card">
            <img
              src={`${process.env.PUBLIC_URL}/assests/FavMovieAPI.png`}
              alt="img"
            />
            <h3>Favorite Movie App</h3>
            <p>
              A responsive web application built with React.js that allows users
              to browse movies and manage their list of favorites. Movies are
              fetched from a public API...
            </p>
          </div>
          <div class="card">
            <img
              src={`${process.env.PUBLIC_URL}/assests/Review.png`}
              alt="img"
            />
            <h3>Interactive Rating Component</h3>
            <p>
              This project is a simple yet interactive rating component built
              using HTML, CSS, and JavaScript. The primary function is to allow
              users to provide feedback by selecting...
            </p>
          </div>
          <div class="card">
            <img
              src={`${process.env.PUBLIC_URL}/assests/WatchApp.png`}
              alt="img"
            />
            <h3>LifeLink – Smartwatch Emotional Well-being Tracker</h3>
            <p>
              LifeLink is a smartwatch application designed to monitor users'
              emotions and provide personalized recommendations to enhance their
              well-being
            </p>
          </div>
          <div class="card">
            <img src={`${process.env.PUBLIC_URL}/assests/Blog.png`} alt="img" />
            <h3>Blogger – Minimalist Blog Homepage</h3>
            <p>
              Blogger is a clean and modern blog homepage designed to showcase
              articles in a structured and visually appealing layout.
            </p>
          </div>
        </div>
        <Link className="link" to="/project">
          CLICK FOR MORE...
        </Link>
      </section>
    </div>
  );
};

export default SingleFile;
