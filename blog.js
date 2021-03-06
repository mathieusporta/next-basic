import React from "react";
import { Layout } from "../components/layout";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";


const Blog = ({ posts }) => {
  const styles = {
    main: {
      padding: 20,
      margin: 20,
      borderBottom: "1px solid #DDD",
    },
    img: {
      height: 200,
      width: 300,
    },
  };
  return (
    <>
      <Head>
        <title>Liste des blogs</title>
      </Head>
      <Layout>
        {data.map((platform) => (
          <div key={platform._id}>
            <h1>{platform.name}</h1>
            <Link href={`/blog/${post._id}`} passHref>
              <div>
                <img src={post.pictures[0]} style={styles.img} />
              </div>
            </Link>

            <div>{post.body}</div>
          </div>
        ))}
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const url = "https://aqueous-meadow-07678.herokuapp.com";
  const { data } = await axios.get(`${url}/api/posts`);
  const posts = data.data;

  return {
    props: {
      posts,
    },
  };
};
export default Blog;