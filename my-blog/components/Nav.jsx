import React from 'react'
import styles from "../styles/nav.module.css";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.nav_container}>
        <Image
          src={"/images/news.png"}
          alt="news blog logo"
          width={60}
          height={60}
        />
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav