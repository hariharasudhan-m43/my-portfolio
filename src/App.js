import React, { useEffect, useState } from "react";
import "./App.css"; // contains styles
// import resume from "./assets/resume.pdf";
import profilePic from "./assets/profile.jpg";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        setMenuOpen(false); // close menu after click
      });
    });

    // Intersection observer animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    document.querySelectorAll(".skill-item, .project-card").forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });
  }, []);

  return (
    <>
      <header>
        <nav>
          <div className="logo">Hari<span> Portfolio</span></div>

          {/* 3 dots button */}
          {/* <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fas fa-ellipsis-v"></i>
          </div> */}
          <div
  className={`menu-toggle ${menuOpen ? "active" : ""}`}
  onClick={() => setMenuOpen(!menuOpen)}
>
  <span></span>
  <span></span>
  <span></span>
</div>


          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="hero">
          <div className="profile-pic">
             <img src={profilePic} alt="Hari hara sudhan M" />
          </div>
          <h1>Hari hara sudhan M</h1>
          <p className="tagline">CSE Student | Aspiring Software Developer</p>
          <p className="personal-statement">
            I build scalable, user-focused applications that turn ideas into impactful digital solutions.
          </p>
        </section>

        {/* About */}
        <section id="about" className="about">
          <h2>About Me</h2>
          <div className="about-content">
            <p>
                   Hi, I’m Hari hara sudhan M, a software developer with a strong focus on "Full stack". I enjoy turning ideas into functional and user-friendly websites, and I’m always curious to learn new technologies that make the web better.
            </p><br/>
            <p>
                   Over the past few years, I’ve worked with HTML, CSS, JavaScript, and frameworks like React and Node.js to build projects ranging from simple landing pages to full-stack applications. I love solving problems through code and experimenting with design to create clean, responsive, and accessible websites.
            </p><br/>
            <p>
                   When I’m not coding, you’ll probably find me exploring new tools, contributing to small projects, or learning about UI/UX trends. My goal is to grow as a developer, build meaningful projects, and eventually contribute to products that make a real impact.
            </p>
          </div>
        </section>

        
        {/* Skills */}
{/* Skills */}
<section id="skills" className="skills">
  <h2>Skills</h2>

  {/* Languages */}
  <h3 className="skills-subtitle">Languages</h3>
  <div className="skills-grid">
    <div className="skill-item">
      <i className="fab fa-js"></i>
      <h3>JavaScript (ES6+)</h3>
    </div>
    <div className="skill-item">
      <i className="fab fa-java"></i>
      <h3>Java</h3>
    </div>
    <div className="skill-item">
      <i className="fab fa-html5"></i>
      <h3>HTML5</h3>
    </div>
    <div className="skill-item">
      <i className="fab fa-css3-alt"></i>
      <h3>CSS3</h3>
    </div>
  </div>

  {/* Frameworks & Libraries */}
  <h3 className="skills-subtitle">Frameworks & Libraries</h3>
  <div className="skills-grid">
    <div className="skill-item">
      <i className="fab fa-react"></i>
      <h3>React.js</h3>
    </div>
    <div className="skill-item">
      <i className="fab fa-node-js"></i>
      <h3>Node.js</h3>
    </div>
    <div className="skill-item">
      <i className="fas fa-server"></i>
      <h3>Express.js</h3>
    </div>
  </div>

  {/* Tools & Others */}
  <h3 className="skills-subtitle">Tools & Others</h3>
  <div className="skills-grid">
    <div className="skill-item">
      <i className="fas fa-database"></i>
      <h3>MongoDB</h3>
    </div>
    <div className="skill-item">
      <i className="fab fa-git-alt"></i>
      <h3>Git & GitHub</h3>
    </div>
    <div className="skill-item">
      <i className="fas fa-cloud"></i>
      <h3>REST APIs</h3>
    </div>
    <div className="skill-item">
      <i className="fas fa-project-diagram"></i>
      <h3>Agile & Deployment</h3>
    </div>
  </div>
</section>


        {/* Projects */}
        <section id="projects" className="projects">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>NothingFirst – Company Portfolio Website</h3>
              <p>
                A responsive and modern portfolio website built for the startup NothingFirst as part of my frontend development course project. The goal of this project was to design and develop a clean, professional web presence that reflects the company’s values and showcases its services.
              </p>
              <div className="project-links">
                <a href="https://github.com/hariharasudhan-m43/nothingfirst-portfolio.git" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href="https://nothingfirst-portfolio.vercel.app/" target="_blank" rel="noreferrer">
                  Live site
                </a>
              </div>
            </div>

            {/* <div className="project-card">
              <h3>Campus Library System</h3>
              <p>
                A web-based library management system I built for a college
                project. Students can search books, make reservations, and check
                due dates. Made with HTML, CSS, JavaScript, and MySQL – taught
                me a lot about database design.
              </p>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>

            <div className="project-card">
              <h3>Weather Dashboard</h3>
              <p>
                My first real API project! A clean weather dashboard that shows
                current conditions and forecasts. I learned about handling JSON
                data, async programming, and making responsive designs that look
                good on phones.
              </p>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  Live Site
                </a>
              </div>
            </div> */}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact">
          <h2>Let's Connect</h2>
          <div className="contact-content">
            <p>
              I'm always excited to chat about technology, potential
              collaborations, or just share interesting ideas. Whether you have
              a project in mind or want to discuss the latest in tech, feel free
              to reach out!
            </p>

            <div className="contact-links">
              <a href="mailto:hariharasudhan@gmail.com">
                <i className="fas fa-envelope"></i> Email
              </a>
              <a
                href="https://www.linkedin.com/in/hari-hara-sudhan-m-575bb2377 "
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a
                href="https://github.com/settings/profile"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
            <div className="resume-buttons">
            <a href="/resume.pdf" download className="resume-btn">
    <i className="fas fa-download"></i> Download Resume
  </a>
            <a href="/resume.pdf" className="resume-btn">
            <i className="fas fa-file-pdf"></i> View Resume
            </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Hari Hara Sudhan M. All rights reserved.</p>
      </footer>
    </>
  );
}
