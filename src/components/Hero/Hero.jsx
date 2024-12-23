import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Prajwal Sam</h1>
        <p className={styles.description}>
        An enthusiastic learner currently pursuing a Bachelor's in Computer Science at Visvesvaraya National Institute of Technology, Nagpur, Maharashtra. I have a strong interest in Machine Learning and Development, with a passion for building impactful solutions and exploring the latest technologies.
        </p>
        <div class="buttonContainer">

        <a className={styles.contactBtn} href="mailto:rprajwalsam@gmail.com">
          Contact Me via email
        </a>{" "}
       
        <a className={styles.contactBtn} href="https://drive.google.com/file/d/16-l_P3PkL3Kzu6duJw11k8rtxCtyvT-r/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            View My Resume
        </a>
        </div>

      </div>

      {/* <img
        src="../../assets/hero/heroImage.png"
        alt="Prajwal Sam"
        className={styles.heroImg}
      /> */}

      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
}

export default Hero;
