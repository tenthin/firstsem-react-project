import React from 'react'

const Main = () => {
  return (
    <div>
         <main>
        <section class="heroPage">
            <div class="profileImg"><img
                    src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                    alt="My Image"/>
            </div>
            <div class="myName">
                <h1>Hi,I'm <br/> Tenzin Thinley</h1>
                <p>A Frontend Developer</p>
                <div class="resumeDownload">
                    <span>Resume</span>
                    <span><button>Download</button></span>
                </div>
            </div>
        </section>

        <section class="homeAboutMe">
            <h2>ABOUT ME</h2>
            <p>Hello! </p>
            <p>I’m a <b> Frontend and UI/UX Developer </b>with a master’s degree in physics.</p>
            <p>My journey into tech has led me to specialize in <b>Frontend and UI/UX design</b>, where I’m passionate
                about creating
                intuitive and visually stunning user experiences.</p>
            <p>Throughout my career, I’ve developed a solid foundation in <b>HTML, CSS, and JavaScript</b>, as well as
                frameworks like <b>React</b>.</p>
            <p> My background in physics enhances my ability to think critically and tackle complex challenges, ensuring
                that my designs are not only beautiful but also functional and user-centered.</p>
            <p> I thrive on collaboration and am always eager to learn from others, staying updated with the latest
                industry trends and best practices. </p>
            <p> Let’s connect and create something amazing together! </p>
        </section>

        <section class="homeProject">
            <h2>MY PROJECT</h2>
            <div class="projectSection">
                <div class="card">
                    <img src="./img/project-1.png" alt="img"/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deserunt officia praesentium
                        illo
                        amet magni cumque id saepe porro beatae!</p>
                </div>
                <div class="card">
                    <img src="./img/project-2.png" alt="img"/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deserunt officia praesentium
                        illo
                        amet magni cumque id saepe porro beatae!</p>
                </div>
                <div class="card">
                    <img src="./img/project-3.png" alt="img"/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deserunt officia praesentium
                        illo
                        amet magni cumque id saepe porro beatae!</p>
                </div>
            </div>
            <a href="./projects.html">SEE MORE...</a>
        </section>
    </main>
    </div>
  )
}

export default Main