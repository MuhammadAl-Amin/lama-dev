"use client"
import React from "react";
import styles from "./navLinks.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ items }) => {
    const pathName = usePathname()
  return (
    <Link href={items.path} className={`${styles.containers} ${pathName === items.path && styles.active}`}>
      {items.title}
    </Link>
  );
};

export default NavLinks;
