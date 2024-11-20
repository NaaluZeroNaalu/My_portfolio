import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';

function App() {
  const [count, setCount] = useState(0)


  // const formRef = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   // Check if formRef is correctly set
  //   if (formRef.current) {
  //     emailjs.sendForm('service_99sz48v', 'template_cvvyb9s', formRef.current, '_s33J6xuP7n0eqqjG')
  //       .then((result) => {
  //         console.log('Email sent successfully!', result.text);
  //         alert("Request submitted successfully");
  //         window.location.href = "/Industries"
  //         e.target.reset(); // Reset form after submission
  //       }, (error) => {
  //         console.error('Error sending email:', error.text);
  //       });
  //   } else {
  //     console.error('Form reference is not set.');
  //   }
  // };

  return (
    <>
     <h1 id='name'>AJITH KUMAR</h1>
     <h3 id='role'>FULL STACK DEVELOPER</h3>
     <h4 style={{color:"wheat"}}>Hi, I’m Ajith Kumar, a passionate Full-Stack Developer with a knack for building innovative and efficient web applications. With a strong foundation in both front-end and back-end development, I specialize in creating seamless user experiences and robust systems that perform well under pressure.</h4>
     

     {/* EDUCATION START */}

     <h1 style={{ color: "white" , textAlign:"center"}}>EDUCATION</h1>

<div className="row">
  <div className="col-lg-3">
    <div className="glass-card" id="educations">
      <h1>MCA</h1>
      <h3>University of Madras</h3>
    </div>
  </div>
  <div className="col-lg-3">
    <div className="glass-card" id="educations">
      <h1>BCA</h1>
      <h3>Madha arts and science college</h3>
    </div>
  </div>
  <div className="col-lg-3">
    <div className="glass-card" id="educations">
      <h1>Higher Secondary</h1>
      <h3>Anjuham hr secondary school</h3>
    </div>
  </div>
  <div className="col-lg-3">
    <div className="glass-card" id="educations">
      <h1>SSLC</h1>
      <h3>Anjuham hr secondary school</h3>
    </div>
  </div>
</div>
     {/* EDUCATION END */}


     {/* SKILLS START */}

     <h1 style={{ color: "white" , textAlign:"center"}}>WHAT I DO</h1>

     <div className="row">
  <div className="col-lg-3">
    <div className="glass-card" id="educations">
      <h1>JAVA</h1>
    </div>
  </div>
  <div className="col-lg-3">
    <div className="glass-card" id="educations">
        <h1>PYTHON</h1>
    </div>
  </div>
  <div className="col-lg-3">
    <div className="glass-card" id="educations">
      <h1>REACT JS</h1>
    </div>
  </div>
  <div className="col-lg-3">
    <div className="glass-card" id="educations">
      <h1>NODE JS</h1>
    </div>
  </div>
  <div className="col-lg-3">
    <div className="glass-card" id="educations">
      <h1>DJANGO</h1>
    </div>
  </div>
  <div className="col-lg-3">
    <div className="glass-card" id="educations">
      <h1>FLASK</h1>
    </div>
  </div>
  <div className="col-lg-3">
    <div className="glass-card" id="educations">
      <h1>STREAMLIT</h1>
    </div>
  </div>
  <div className="col-lg-3">
    <div className="glass-card" id="educations">
      <h1>SPRING BOOT</h1>
    </div>
  </div>
  <div className="col-lg-3">
    <div className="glass-card" id="educations">
      <h1>SQL</h1>
    </div>
  </div>
  <div className="col-lg-3">
    <div className="glass-card" id="educations">
      <h1>MONGO DB</h1>
    </div>
  </div>
</div>

     {/* SKILLS END */}


     {/* PROECTS START */}
     <h1 style={{ color: "white" , textAlign:"center"}}>MY PROJECTS</h1>
     
     <div className="row">
  <div className="col-lg-3">
    <div className="glass-card" id="educations">
      <h1>Project 1</h1>
    <br />
    <div className="d-grid">
    <button className='btn btn-dark'>More</button>
    </div>
    </div>
  </div>
  <div className="col-lg-3">
    <div className="glass-card" id="educations">
    <h1>Project 2</h1>
    <br />
    <div className="d-grid">
    <button className='btn btn-dark'>More</button>
    </div>
    </div>
  </div>
  <div className="col-lg-3">
    <div className="glass-card" id="educations">
    <h1>Project 3</h1>
    <br />
    <div className="d-grid">
    <button className='btn btn-dark'>More</button>
    </div>
    </div>
  </div>
  <div className="col-lg-3">
    <div className="glass-card" id="educations">
    <h1>Project 4</h1>
    <br />
    <div className="d-grid">
    <button className='btn btn-dark'>More</button>
    </div>
    </div>
  </div>
</div>
     {/* PROECTS END */}


{/* LETS CONNECT START */}

<h1 style={{ color: "white" , textAlign:"center"}}>LETS CONNECT</h1>

<form action="/action_page.php">
  <div class="mb-3 mt-3">
    <label for="email" class="form-label">Email:</label>
    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
  </div>
  <div class="mb-3">
    <label for="pwd" class="form-label">Password:</label>
    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
  </div>
  <div class="form-check mb-3">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox" name="remember" /> Remember me
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
{/* LETS CONNECT END */}


<h1 style={{ color: "white" , textAlign:"center"}}>SOCIAL LINKS</h1>

<ol className="nav" id='socialmedias'>
      <li className="nav-item">
        <a href="#" className="nav-link">
        <FaGithub />
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
        <FaLinkedin />
        </a>
      </li>
     </ol>



    </>
  )
}

export default App
