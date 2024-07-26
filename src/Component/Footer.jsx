import React from "react";
import Styled from "./Footer.module.css";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { SiLinktree } from "react-icons/si";
const Footer = () => {
  return (
    <div className={Styled["section"]}>
      <p className={Styled["titleName"]}>Muhammad Fahad</p>
      <ul className={`${Styled.ul}`}>
        <li>
          <a href="#" className={`${Styled.li}`}>
            Home
          </a>
        </li>
        <li className={`${Styled.li}`}>
          <a href="#About" className={`${Styled.li}`}>
            About{" "}
          </a>{" "}
        </li>
        <li className={`${Styled.li}`}>
          <a href="#Experience" className={`${Styled.li}`}>
            Experience
          </a>{" "}
        </li>
        <li className={`${Styled.li}`}>
          <a href="#Portfolio" className={`${Styled.li}`}>
          My Portfolio
          </a>
        </li>
        <li className={`${Styled.li}`}>
          <a href="#Contact" className={`${Styled.li}`}>
            Contact
          </a>{" "}
        </li>
      </ul>
        <ul className={`${Styled.socialMedia}`}>
          <li className={`${Styled.icon}`}>
            <a href="https://github.com/muhammad-fahad-hussain/" className={`${Styled.icons}`}>
              <AiFillGithub />
            </a>
          </li>
          <li className={`${Styled.icon}`}>
            <a href="https://www.linkedin.com/in/fahad-moon/" className={`${Styled.icons}`}>
              <AiFillLinkedin />
            </a>{" "}
          </li>
          <li className={`${Styled.icon}`}>
            <a href="https://www.instagram.com/muhammad.fahad.hussain/" className={`${Styled.icons}`}>
              <AiFillInstagram />
            </a>{" "}
          </li>
          <li className={`${Styled.icon}`}>
            <a href="https://linktr.ee/muhammad.fahad" className={`${Styled.icons}`}>
              <SiLinktree />
            </a>
          </li>
         
        </ul>
      
      <p
          className={`${Styled.copy}`}
          style={{ fontSize: "0.8rem" }}
        >
          © Created By Muhammad Fahad. All rights reserved.
        </p>
    </div>
  );
};

export default Footer;
