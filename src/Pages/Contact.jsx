import React, { useState } from "react";
import Styles from "./Contact.module.css";
import { SiLinktree } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { db } from "../firebase"; // Adjust the path as needed
import { collection, addDoc } from "firebase/firestore";
import Modal from 'react-modal';

// Set the app element for accessibility
Modal.setAppElement('#root');

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      // Add a new document with a generated ID
      await addDoc(collection(db, "contact"), formData);
      // Open the modal to confirm submission
      setModalIsOpen(true);
      // Clear the form after submission
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("There was an error sending your message. Please try again.");
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={`${Styles.contact}`}>
      <div className="container">
        <p className={Styles["title1"]}>
          <span className={Styles["title"]}>Contact Me</span>
        </p>
        <div className={`mb-5 ${Styles.row}`}>
          <div className={`${Styles.cardPart}`}>
            <SiLinktree />
            <p className="text-center mt-3">Linktree</p>
            <span className="text-muted text-center mt-0">linktr.ee/muhammad.fahad</span>
            <a
              href="https://linktr.ee/muhammad.fahad"
              className={`${Styles.btn}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Checkout
            </a>
          </div>

          <div className={`${Styles.cardPart}`}>
            <FaLinkedinIn />
            <p className="text-center mt-3">Linkedin</p>
            <span className="text-muted text-center mt-0">https://bit.ly/3Pddv2Y</span>
            <a
              href="https://www.linkedin.com/in/muhammadfahadhussain/"
              className={`${Styles.btn}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Message
            </a>
          </div>

          <div className={`${Styles.cardPart}`}>
            <AiOutlineMail />
            <p className="text-center mt-3">Email</p>
            <span className="text-muted text-center mt-0">mfahadhussain76@gmail.com</span>
            <a
              href="mailto:mfahadhussain76@gmail.com"
              className={`${Styles.btn}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Message
            </a>
          </div>
        </div>

        <div className={Styles["formContainer"]}>
          <h3 className={Styles["formTitle"]}>Get in Touch</h3>
          <form onSubmit={handleSubmit} className={`${Styles.contactForm}`}>
            <div className={Styles["formGroup"]}>
              <label htmlFor="name" className={`${Styles.formLabel}`}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`${Styles.formControl}`}
                required
              />
            </div>
            <div className={`${Styles.formGroup}`}>
              <label htmlFor="phone" className={`${Styles.formLabel}`}>Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`${Styles.formControl}`}
                required
              />
            </div>
            <div className={`${Styles.formGroup}`}>
              <label htmlFor="email" className={`${Styles.formLabel}`}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${Styles.formControl}`}
                required
              />
            </div>
            <div className={`${Styles.formGroup}`}>
              <label htmlFor="message" className={`${Styles.formLabel}`}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`${Styles.formControl}`}
                rows="4"
                required
              />
            </div>
            <button type="submit" className={`${Styles.btn} ${Styles["submitBtn"]}`}>
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Modal for confirmation */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Message Sent Confirmation"
        className={Styles.modal}
        overlayClassName={Styles.overlay}
      >
        <h2>Message Sent</h2>
        <p>Your message has been sent successfully!</p>
        <button onClick={closeModal} className={Styles.buttonClose}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Contact;
