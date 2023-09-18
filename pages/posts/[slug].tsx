import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { getPostBySlug, getPosts } from "@services";
import Image from "next/image";
import moment from "moment";
import { useTheme } from "@contexts/ThemeContext";

interface PostDetailProps {
  post: {
    title: string;
    excerpt: string;
    content: {
      text: string;
    };
    featuredImage: {
      url: string;
    };
    author: {
      name: string;
      bio: string;
      photo: {
        url: string;
      };
    };
    createdAt: string;
    slug: string;
  };
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  const router = useRouter();
  const { slug } = router.query;
  const { theme } = useTheme();
  return (
    <main className={`w-full flex flex-col items-center bg-${theme}-background`}>
      <section className="max-w-screen-md py-8 flex flex-col">
        <div className="">
          <h2 className={`text-4xl font-bold my-6 text-${theme}-text`}>{post.title}</h2>
          <div className={`flex flex-row items-center my-6 tracking-wide leading-8 text-${theme}-text`}>
            <Image
              src={post.author.photo.url}
              alt={post.author.bio}
              width={40}
              height={40}
              className="rounded-full mr-2"
            ></Image>
            <div className="flex flex-row items-center justify-center">
              <p>
                By<span className="px-2">{post.author.name} </span>
              </p>
              <p> . {moment(post.createdAt).format("MMMM DD, YYYY")}</p>
            </div>
          </div>
        </div>
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          width={768}
          height={400}
          className="mb-6"
        />
        <p className={`tracking-normal leading-8 text-${theme}-text`}>{post.content.text}</p>
      </section>
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();

  const paths = posts.map((post: any) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      showHeader: true,
      showFooter: true,
    },
  };
};

export default PostDetail;
