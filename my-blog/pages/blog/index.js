import React from "react";
import Link from "next/link";
import { getData } from "./getData";
import Layout from "./layout";

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
    <Layout title = 'Blog' >
      <h2>My Blog</h2>
      <div>
        <h3>Entradas</h3>
        <ul>
            {posts.slice(0,10).map((post, i) => (
              <li key={i}>
                <Link href={`blog/posts/${post.title}`}>
                {post.title}
                </Link>
                
                </li>
            ))}
        </ul>
      </div>
    </Layout>
  );
};

export default index;
