import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="../../assets/contact/emailIcon.png" alt="Email icon" />
          <a href="mailto:rprajwalsam@gmail.com">Email</a>
        </li>
        <li className={styles.link}>
          <img
            src="../../assets/contact/linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/prajwal-sam-rachapudy-7bb409249/">
            linkedin
          </a>
        </li>
        <li className={styles.link}>
          {/* <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" /> */}
          <img src="../../assets/contact/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/prajwalandysam">github</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
