import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h3 className={styles.header}>About Agency</h3>
        <h1 className={styles.title}>
          We create digital idea that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.dsc}>
          We create digital idea that are bigger, bolder, braver and better.We
          create digital idea that are bigger, bolder, braver and better.We
          create digital idea that are bigger, bolder, braver and better.We
          create digital idea that are bigger, bolder, braver and better.
        </p>
        <div className={styles.expContainer}>
          <div className={styles.expBody}>
            <h1 className={styles.expTitle}>10 k+</h1>
            <p className={styles.expDsc}>years of experience</p>
          </div>

          <div className={styles.expBody}>
            <h1 className={styles.expTitle}>10 k+</h1>
            <p className={styles.expDsc}>years of experience</p>
          </div>

          <div className={styles.expBody}>
            <h1 className={styles.expTitle}>10 k+</h1>
            <p className={styles.expDsc}>years of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.img}></Image>
      </div>
    </div>
  );
};

export default AboutPage;
