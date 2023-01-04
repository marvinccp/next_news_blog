import Link from 'next/link';
import React from 'react'
import Head from "next/head";
import styles from '../../styles/nav.module.css'

const Layout = ({ children, title = 'Next Blog' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav className={styles.container}>
        <ul>
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

      {children}
    </>
  );
};

export default Layout