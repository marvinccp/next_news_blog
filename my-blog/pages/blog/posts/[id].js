import React from "react";
import Layout from "../layout";
import Image from 'next/image'
import styles from '../../../styles/posts.module.css'
const Post = ({ dataPost}) => {
  return (
    <Layout title={dataPost.title}>
      <section className={styles.container}>
        <h4>{dataPost.title}</h4>
        <div className={styles.data}>
          <p className={styles.author}>Author: {dataPost.author}</p>
          <p className={styles.author}>Source: {dataPost.source.name}</p>
        </div>

        <p>{dataPost.content}</p>
        <div>
          <Image
            src={dataPost.urlToImage}
            alt={`notice image ${dataPost.title}`}
            width={1200}
            height={1200}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            priority={true}
          />
        </div>
      </section>
    </Layout>
  );
};

export default Post;


const getAllPostids = async () => {
  const data = await (
    await fetch(
      "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=4733b8f81b334ac0bdfb718def30fe5a"
    )
  ).json();
  const datainfo = data.articles;
  return datainfo.map((item) => {
  
    return {
      params: {
        id: item.title,
      },
    };
  });
};


//obterner posts
const getPostData = async (title) => {
  const data = await (
    await fetch(
      "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=4733b8f81b334ac0bdfb718def30fe5a"
    )
  ).json();
  const datainfo = data.articles
  const post = datainfo.find((item) => item.title === title);
  console.log(post)
  return post;
};


export const getStaticPaths = async () => {
  const posts = await getAllPostids();
  return {
    paths: posts,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const posts = await getPostData(params.id);
  return {
    props : {
        dataPost: posts
    }
  };
};
