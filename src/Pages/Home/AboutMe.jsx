import React from "react";
import "./about.css";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img
          src="./img/about.png"
          alt="About Me"
          className="about--section--img--style"
        />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h2 className="skills-section--heading">About Me</h2>

          <p className="hero--section-description">
  I’m <strong>Kalyan Kumar Pulapaka</strong>, a dedicated <strong>Web Developer</strong> with hands-on experience in frontend and 
  full-stack development. With a solid foundation in <strong>HTML, CSS, JavaScript</strong>, and modern frameworks like 
  <strong> React</strong>, I have a proven ability to create dynamic, user-friendly, and scalable web applications that address real-world 
  challenges.
</p>

<p className="hero--section-description">
  I started my career at <strong>Accenture</strong>, where I contributed to the development of responsive web interfaces for 
  cloud-based applications, improving performance and cross-platform compatibility. At <strong>Teleperformance</strong>, I further honed my skills as a 
  <strong>Junior Web Developer</strong>, building reusable React components, integrating APIs, and collaborating with designers and backend teams to 
  ensure seamless user experiences.
</p>

<p className="hero--section-description">
  Currently, as a <strong>Freelance MERN Stack Developer</strong>, I am working on projects like <strong>Hello Exams</strong>, a mock exam preparation platform, 
  where I’ve implemented features such as PDF report generation, performance analytics, and real-time feedback. My development approach emphasizes scalability, 
  responsiveness, and usability to meet diverse client needs.
</p>

<p className="hero--section-description">
  I hold a <strong>Full Stack Developer Certification</strong> from <strong>Guvi-IIT Madras</strong>, where I built end-to-end applications using the 
  <strong>MERN stack</strong>. My technical expertise extends to tools like <strong>Git</strong>, <strong>REST APIs</strong>, and <strong>Agile methodologies</strong>, ensuring smooth collaboration and efficient delivery. 
  I am passionate about continuously learning and applying emerging technologies to deliver solutions that align with business objectives.
</p>

        </div>
      </div>
    </section>
  );
}
