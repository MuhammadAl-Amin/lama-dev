"use client"
import React, { useState } from "react";
import styles from "./links.module.css";
import NavLinks from "./navLinks/NavLinks";
import { handleGithubLogOut } from "@/lib/action";
const Links = ({session}) => {
    const [open, setOpen] = useState(false)
  const links = [
    {
      title: "contact",
      path: "/contact",
    },
    {
      title: "blog",
      path: "/blog",
    },
    {
      title: "about",
      path: "/about",
    },
    {
      title: "registration",
      path: "/registration",
    },
  ];

  
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.link}>
        {links.map((link) => (
          <NavLinks items={link} key={link.title}></NavLinks>
        ))}
        {session ? (
          <>
            {session.user?.isAdmin && (
              <NavLinks items={{ title: "Admin", path: "/admin" }}></NavLinks>
            )}
            <form action={handleGithubLogOut}>
            <button className={styles.logOut}>LogOut</button>
            </form>
          </>
        ) : (
          <NavLinks items={{ title: "Login", path: "/login" }}></NavLinks>
        )}
      </div>
      <button className={styles.menuButton} onClick={()=>setOpen(!open)}>Menu</button>
      {
        open && (<div className={styles.mobileLinks}>
            {links.map((link) => (
          <NavLinks items={link} key={link.title}></NavLinks>
        ))}
        </div>)

      }
    </div>
  );
};

export default Links;
