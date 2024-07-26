import React, { useState } from "react";
import Styled from "./Experience.module.css";
import Bio from "../data";
import { Carousel } from 'react-responsive-3d-carousel';
import Picture1 from '../Image/IMG-20240420-WA0074.jpg';
import Picture2 from '../Image/IMG-20240420-WA0080.jpg';
import Picture3 from '../Image/11.png';
import Picture4 from '../Image/22.jpg';
import Picture5 from '../Image/1.jpg';
import Picture6 from '../Image/2.jpg';
import Picture7 from '../Image/5.jpg';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const Experience = () => {
  const [isGalleryOpen, setGalleryOpen] = useState(false);

  const images = [
    { original: Picture1, thumbnail: Picture1 },
    { original: Picture2, thumbnail: Picture2 },
    { original: Picture3, thumbnail: Picture3 },
    { original: Picture4, thumbnail: Picture4 },
    { original: Picture5, thumbnail: Picture5 },
    { original: Picture6, thumbnail: Picture6 },
    { original: Picture7, thumbnail: Picture7 },
  ];

  const handleImageClick = () => {
    setGalleryOpen(true);
  };

  const handleCloseGallery = () => {
    setGalleryOpen(false);
  };

  return (
    <div className={Styled['section']}>
      <p className={Styled["title1"]}>
        <span className={Styled["title"]}>Experience</span>
      </p>

      <div className={Styled["container"]}>
        {Bio.experience.map((exp, index) => (
          <div className={Styled["card"]} key={index}>
            <h3>{exp.role}</h3>
            <small className={Styled["small"]}>{exp.name}</small>
            <p>{exp.start_date} - {exp.end_date}</p>
            <p className={Styled["description"]}>{exp.description}</p>
          </div>
        ))}
      </div>
      <p className={Styled["titleAch"]}>
        <span className={Styled[""]}>Professional Achievements</span>
      </p>
      <Carousel showStatus={false}>
        <img src={Picture4} alt="example-image-1" onClick={handleImageClick} />
        <img src={Picture3} alt="example-image-2" onClick={handleImageClick} />
        <img src={Picture7} alt="example-image-3" onClick={handleImageClick} />
        <img src={Picture2} alt="example-image-4" onClick={handleImageClick} />
      </Carousel>

      {isGalleryOpen && (
        <div className={Styled["gallery-modal"]}>
          <button onClick={handleCloseGallery} className={Styled["close-button"]}>Close</button>
          <ImageGallery items={images} />
        </div>
      )}
    </div>
  );
};

export default Experience;
