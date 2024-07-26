import React from "react";
import Styled from "./About.module.css";
import Picture from '../Image/fahad2.jpg';
const About = () => {
  return (
    <section>
      <p className={Styled['text']}>Get to know</p>

      <div className={Styled["container"]}>

        <div className={Styled["img-container"]}>
          <img src={Picture} alt="" className={Styled["image"]} />
        </div>
        <div className={Styled["about-container"]}>
          <div className={Styled["col-about"]}>
            <small className={Styled["title"]}>
              About <span className={Styled["boder-line"]}></span>
            </small>
            <small className={Styled["titleName"]}>Muhammad Fahad</small>
            <p className={Styled["paragraph"]}>
              <b>Web Developer</b> skilled in React.js, Node.js, Express.js, MongoDB, JavaScript, and Tailwind CSS, with a strong passion for learning new tech stacks and exploring AI. Experienced in modern frameworks, API integration, and responsive design. Proficient in Flutter development and has a background in accounting, entrepreneurship, digital marketing, and adventure trip management. Eager to contribute as an Associate Software Engineer, bringing strong problem-solving skills and a diverse set of technical and professional experiences to the role.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
