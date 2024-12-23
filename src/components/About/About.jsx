import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About me</h2>

      <div className={styles.content}>
        {/* <img
          src="../../assets/about/aboutImage.png"
          alt="Prajwal Sam"
          className={styles.aboutImage}
        /> */}

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="./../assets/about/serverIcon.png" alt="server" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>I am an aspiring developer working with ReactJS, Node.js, Express, and MongoDB, while also expanding my skills by learning advanced frameworks like Spring and Spring Boot.</p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src="./../assets/about/serverIcon.png" alt="server" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer (SpringBoot)</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                ea modi iste ipsa repudiandae exercitationem repellat delectus
                distinctio rerum ex!
              </p>
            </div>
          </li> */}

          <li className={styles.aboutItem}>
            <img src="./../assets/about/uiIcon.png" alt="ui" />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning </h3>
              <p>
              I recently started exploring Machine Learning and am gaining hands-on experience through various projects, including a Federated Learning project (ML without data sharing).
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
