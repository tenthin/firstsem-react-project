// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  // Function to handle resume download
  const handleDownload = () => {
    // Create an invisible anchor element to trigger download
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/resume.pdf`; // Path to your resume
    link.download = 'Tenzin_Thinley_Resume.pdf';
    link.click();
  };
  return (
    <div className='page-container'>
      <section className="heroPage">
        <div className="profileImg">
          <img src={`${process.env.PUBLIC_URL}/assests/profile2.jpg`} alt="My Image" />
        </div>
        <div className="myName">
          <h1>Hi, I'm Tenzin Thinley</h1>
          <p>FRONTEND DEVELOPER</p>
          <div className="resumeDownload">
            <span>RESUME</span>
            <button onClick={handleDownload}>DOWNLOAD</button>
          </div>
        </div>
      </section>

      <div className='aboutmee'>
        <h1>ABOUT ME</h1>
        <section className="homeAboutMe">
          <p>I’m a <b>Frontend and UI/UX Developer</b> with a master’s degree in physics.</p>
          <p>My journey into tech has led me to specialize in <b> Frontend and UI/UX design</b>, where I’m passionate about creating intuitive and visually stunning user experiences.</p>
          <p>Throughout my career, I’ve developed a solid foundation in <b>HTML, CSS, and JavaScript</b>, as well as frameworks like <b>React</b>.</p>
          <p>My background in physics enhances my ability to think critically and tackle complex challenges, ensuring that my designs are not only beautiful but also functional and user-centered.</p>
          <p>I thrive on collaboration and am always eager to learn from others, staying updated with the latest industry trends and best practices.</p>
          <p>Let’s connect and create something amazing together!</p>
        </section>
      </div>

      <section className="homeProject">
        <h1>PROJECT</h1>
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
        <Link  className='link' to="/project">CLICK HERE...</Link>
      </section>
    </div>
  );
};

export default Home;
