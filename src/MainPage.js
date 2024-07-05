import React,{useState} from 'react'
import axios from 'axios'


import SachinPhoto from './image/sachinimg.png'
import ReactImg from './image/react logo.png';
import c from './image/c.png'
import cpp from './image/c++.png'
import nodeimg from './image/nodejs-removebg-preview.png'
import mongodb from './image/mongodb-removebg-preview.png'
import mysql from './image/mysql-removebg-preview.png'
import expressImg from './image/express-removebg-preview.png'
import html from './image/html logo.webp'
import css from './image/css logo.png'
import javascript from './image/JavaScript-Logo.png'
import python from './image/python-removebg-preview.png'
import java from './image/java logo.png'
import vidhyaghar from './image/vidhyghar.png'
import vaccination from './image/Vaccination reg.png'
import hempal from './image/hempal.png'
import iot from './image/IOT.png'
import proflammingoImg from './image/proflammingo.png'
import yelloColor from './image/solid-color-image.png'

// import github from './image/githublogo.png';
// import linkedin from './image/linkedin.png';
// import emailImg from './image/email.png'
// import phone from './image/phone.png'
// import whatsapp from './image/pngwing.com.png'
// import instagram from './image/InstagramPNG-removebg-preview.png'


function MainPage() {

  const [name,setName]= useState('');
  const [email,setEmail]= useState('');
  const [message,setMessage]= useState('');

  let submit = async(e)=>{
    e.preventDefault();
        try{
            if(name.length!=0 && email.length!=0 && message.length!=0)
            {
              await axios.post("https://portfolio-mern-api-amber.vercel.app/",{name,email,message});
              alert("Message sent successfully :)")
            }
            else{
                alert("Fill all the fields");
            }
        }
        catch(e){
          console.log(e);
        }
  }

  
  return (
    <>
     <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler "
          id="nav-toggle-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link white" href="#about">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link white" href="#skills">Skills</a>
            </li>
          
            <li className="nav-item">
              <a className="nav-link white" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link white" href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link white" href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    {/* <!-- navbar section completed --> */}

    <section className="first_box">
      <div className="sub_first_box" id="first">
        <img src={SachinPhoto} alt="" />
      </div>
      <div className="sub_first_box" id="second">
        Hi! <br />
        I'm <span id="name">Sachin Suthar</span>
        <br />
        (Web Developer) <br/>
        <a href="https://drive.google.com/file/d/11g4tzUbRgoKaKmsafQ5ltZc9DdVgcqDn/view?usp=sharing" className="btn btn-light">Download Resume</a>
        
      </div>
    </section>

    {/* <!-- main section completed  --> */}

    <section id="about">
      <br />
      <center><span className="heading">About Me</span></center>
      <br />
      <br />
      <div className="container">
        <div id="name">
          Hello! I am Sachin Suthar (Web Developer). Experienced with the
          development of web projects. Having knowledge of ReactJS, NodeJs,
          ExpressJS, MongoDB, HTML5, CSS3, JavaScript, MySQL.
        </div>
        <br />
        <div>
          <span id="name">Name :</span> &nbsp;
          <span>Sachin Suthar</span>
        </div>
        <div>
          <span id="name">Date of Birth : </span> &nbsp;
          <span>10-Novemeber-2002</span>
        </div>
        <div>
          <span id="name">Nationality :</span> &nbsp; <span>Indian</span>
        </div>
        <div>
          <span id="name"> Address : &nbsp; </span
          ><span>At post sikwara,Jalore(Raj.)</span>
        </div>
        <div>
          <span id="name"> E-mail : &nbsp; </span
          ><span> mistrysachin185@gmail.com</span>
        </div>
        <div>
          <span id="name"> Mobile No: &nbsp;</span>
          <span>+91 &nbsp; 9116525110 </span>
        </div>
      </div>
    </section>
    <br />
    <br />

    <section className="skill" id="skills">
      <br />
      <center><span className="heading">Skills</span></center>
      <br />
      <br />
      <div className="skills-box">
        <div className="skills">
          <img src={ReactImg} alt="" />
          <h3>React JS</h3>
        </div>
        <div className="skills">
          <img src={nodeimg} alt="" />
          <h3>NodeJS</h3>
        </div>
        <div className="skills">
          <img src={expressImg} alt="" />
          <h3>ExpressJS</h3>
        </div>
        <div className="skills">
          <img src={mongodb} alt="" />
          <h3>MongoDB</h3>
        </div>
        <div className="skills">
          <img src={mysql} alt="" />
          <h3>MySQL</h3>
        </div>
       
        <div className="skills">
          <img src={html} alt="" />
          <h3>HTML</h3>
        </div>

        <div className="skills">
          <img src={css} alt="" />
          <h3>CSS</h3>
        </div>

        <div className="skills">
          <img src={javascript} alt="" />
          <h3>JavaScript</h3>
        </div>

        <div className="skills">
          <img src={c} alt="" />
          <h3>C</h3>
        </div>

        <div className="skills">
          <img src={cpp} alt="" />
          <h3>C++</h3>
        </div>
        <div className="skills">
          <img src={python} alt="" />
          <h3>Python</h3>
        </div>
        <div className="skills">
          <img id="java" src={java} alt="" />
          <h3>Java</h3>
        </div>
      </div>
    </section>


    <section id="projects">
      <br />
      <center><span className="heading">My Projects</span></center>
      <br />
      <br />
      <div className="projects">
      <a className='link project-box' href="#">
      <div>
            <img src={vidhyaghar} alt="vidhyaghar image"/>
            <br/>
          
            <h2>VidhyaGhar</h2>
            <p>Website for School Management System</p>
      </div>
      </a>
      <a className='link project-box' href="https://github.com/sachinsuthar148/Vaccination-Registration-System">
      <div >
            <img id="vaccination" src={vaccination} alt=" vaccination image"/>
            <br/><br/>
             <h2>Vaccination Registration System</h2>
            <p>Website for Vaccination Registration</p>
      </div>
      </a>

      <a className='link project-box' href="https://github.com/sachinsuthar148/hempal/deployments/github-pages">
      <div>
            <img src={hempal} alt="hempal image"/>
            <br/>
            <h2>Hempal Studio</h2>
          
            <p>Web pages for Home Designer Website</p>
      </div>
      </a>
      <a className='link project-box' href="https://sachinsuthar148.github.io/Proflammingo/">
      <div>
        <br/><br/>
            <img id="flammingo" src={proflammingoImg} alt="flammingo image"/>
            <br/>
            <br/>
            <h2>Progammingo</h2>
            <p>Website for Course Management System</p>
      </div>
      </a>
      <a className='link project-box' href="#">

      <div >
 
        <br/>
        <img id="flammingo" src={iot} alt="iot"/>
        <br/>
        
        <h2>Home Automation using IoT</h2>
        <p>Home Automation Project Using IoT</p>
      </div >
     </a>
    </div>
    </section>
  
    <section className="education" id="education">
      <br/>
      <center><span className="heading">My Education</span></center>
      <br/><br/>
      <div className="vertical">
        <div className="horizontal" id="first-horizontal">
          <img src={yelloColor} alt="Yellow Color" />
          <div className="details">
            <h2>B.Tech || 2021-2025</h2>
            <p>Poornima Institute of Engineeing and Technology, Jaipur</p>
          </div>
        </div>
        <div className="horizontal">
          <img src={yelloColor}  alt="Yellow Color" />
          <div className="details">
            <h2>Senior Secondary || 2020</h2>
            <p>Marudhar Bal Niketan senior secondary school, Ramsin(Jalore)</p>
          </div>
        </div>
        <div className="horizontal">
          <img src={yelloColor}  alt="Yellow Color" />
          <div className="details">
            <h2>Secondary || 2018</h2>
            <p>Marudhar Bal Niketan senior secondary school, Ramsin(Jalore)</p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact">
      <br />
      <center><span className="heading">Contact Me</span></center>
      <br />
      <br />
      <div className="container">
    
        <form className="contact-form" method='post' action='/'>
          <input
            type="text"
            placeholder="Your Name"
            onChange={(e)=>{setName(e.target.value)}}
            required /><br />
          <input
            type="email"
            placeholder="Your Email"
            onChange={(e)=>{setEmail(e.target.value)}}
            required /><br />
          <textarea
            placeholder="Your Message"
            onChange={(e)=>{setMessage(e.target.value)}}
            required></textarea
          ><br />
         <center> <input type="submit" onClick={submit} className="btn btn-warning" value="Send Message" /></center>
        </form>
      </div>
    </section>

    </>
  );
}

export default MainPage;
