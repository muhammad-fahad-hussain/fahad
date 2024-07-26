import React from "react";
import Styled from "./Home.module.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { SiLinktree } from "react-icons/si";
import picture from '../Image/fahad2.jpg';

const Home = () => {
  const roles = ["  Associate Software Engineer", " Web Developer"];
  return (
    <section className={Styled["section"]}>
      <div className={Styled["home__container1"]}>
      <span className={Styled["border-Line"]}></span>
        <Link to="http://www.linkedin.com/in/fahad-moon"  target="_blank" className={Styled["Link"]}>
          <AiFillLinkedin />
        </Link>
       
        <Link to="https://github.com/muhammad-fahad-hussain/"  target="_blank" className={Styled["Link"]}>
          <AiFillGithub />
        </Link>
        <span className={Styled["border-Line"]}></span>{" "}
      </div>

      <div className={`${Styled.Home}`}>
        {/* <img src={picture} alt="" className={`${Styled.img}`} /> */}
        <div className={`${Styled.nameDiv}`}>
        
        <h2 className={`${Styled.name}`}> <span >Hi, I'M </span> Muhammad Fahad</h2>
        </div>
        <div>
          <span
            style={{ display: "inline-block" }}
            className={`${Styled.span}`}
          >
            I am a
          </span>
          {"   "}
          <span
            style={{ display: "inline-block" }}
            className={`${Styled.type}`}
          >
            <Typewriter
              options={{
                strings: roles,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
      </div>

      <div className={Styled["home__container2"]}>
        {/* <p>
          W<br />e <br />b<br />
          <br /> D <br />e<br />v<br />e<br />l<br />o<br />p<br />e<br />r
        </p> */}
        <div className={Styled["home__container1"]}>
      <span className={Styled["border-Line"]}></span>
        <Link to="https://www.instagram.com/fahadmoon_/" target="_blank" className={Styled["Link"]}>
          <AiFillInstagram />
        </Link>
        <Link to="https://linktr.ee/muhammad.fahad" target="_blank" className={Styled["Link"]}>
          <SiLinktree />
        </Link>
        <span className={Styled["border-Line"]}></span>{" "}
      </div>
      </div>
    </section>
  );
};

export default Home;
