import React from "react";
import CardBlog from "../../components/CardBlog";
import Layout from "../../components/Layout";

const index = ({ posts }) => {
  return (
    <Layout title="Mi blog" description="Este es mi blog personal ❤️">
      <div>
        <h1 className="text-4xl font-semibold my-5">
          Hola bienvenido a mi blog
        </h1>
        <main>
          {posts.map((post) => (
            <CardBlog key={post.id} post={post} />
          ))}
        </main>
      </div>
    </Layout>
  );
};

export default index;

export const getStaticProps = async (context) => {
  try {
    const res = await fetch("https://virtopus.net/wp-json/wp/v2/posts?_embed");
    const posts = await res.json();
    return {
      props: {
        posts,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        posts: [],
      },
      revalidate: 10,
    };
  }
};
