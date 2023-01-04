import React from "react";
import Link from "next/link";
import { getData } from "./getData";
import Layout from "./layout";
import styles from '../../styles/blog.module.css'
import Image from "next/image";
export const getStaticProps = async () => {
  const posts = await getData();
  return {
    props: {
      posts,
    },
  };
};

const index = ({ posts }) => {
  return (
    <Layout title="Blog">
      <div className={styles.container}>
        <h3 className={styles.title}>My News Blog</h3>
  
        <h4>News</h4>
        <ol>
          {posts.slice(0, 10).map((post, i) => (
            <li className={styles.list} key={i}>
              <Link href={`blog/posts/${post.title}`}>{post.title + ' view...'}</Link>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  );
};

export default index;
