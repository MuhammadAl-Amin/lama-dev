import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.imgContact}></Image>
      </div>

        <form className={styles.form}>
          <input type="text" placeholder="name and surname"></input>
          <input type="email" placeholder="email address"></input>

          <input type="text" placeholder="phone number(optional)"></input>
          <textarea cols="30" rows="10" placeholder="message"></textarea>
          <button className={styles.button}>send</button>
        </form>
      </div>
    
  );
};

export default ContactPage;
