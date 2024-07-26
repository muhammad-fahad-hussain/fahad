import React from "react";
import Styled from "./Project.module.css";
import All from "./Project/All";

const Project = () => {
  return (
    <div className={Styled["section"]}>
      <h3 className={Styled["header"]}>
        <span className={Styled["title"]}>My Portfolio</span>
      </h3>

      <div className={Styled["btns"]}>
        <button className={`${Styled.btn} ${Styled.btn1}`}>All</button>
        <button className={Styled["btn"]}>Web Development</button>
        <button className={`${Styled.btn} ${Styled.btn2}`}>C#(.net framework)</button>
      </div>
      <All />
    </div>
  );
};

export default Project;
