import Link from "next/link";
import Layout from "../../components/Layout";
import DOMPurify from "isomorphic-dompurify";
import { IoReturnUpBack } from "react-icons/io5";

const Post = ({ post }) => {
  return (
    <Layout
      title={"Mi blog - " + post.title.rendered}
      description={
        "Bievenido a mi espacio persona ❤️ este blog se llama: " +
        post.title.rendered
      }
    >
      <Link href="/blog/">
        <button className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200">
          <a className="dark:text-violet-400 hover:text-violet-500 rounded font-semibold text-white text-xl flex gap-2">
            <IoReturnUpBack></IoReturnUpBack>
            Atrás
          </a>
        </button>
      </Link>
      <article className="mt-10">
        <h1 className="text-5xl font-bold">{post.title.rendered}</h1>

        <div
          className="mt-5"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.content.rendered),
          }}
        ></div>
      </article>
    </Layout>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const res = await fetch("https://virtopus.net/wp-json/wp/v2/posts");
  const data = await res.json();

  const arrayPaths = data.map((item) => ({ 
    params: { slug: `${item.slug}` },
  }));

  return {
    paths: arrayPaths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch("https://virtopus.net/wp-json/wp/v2/posts?_embed");
  const posts = await res.json();

  const post = posts.find((item) => item.slug === params.slug);

  return {
    props: {
      post,
    },
  };
};
