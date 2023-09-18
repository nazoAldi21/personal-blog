import React, { useEffect, useState } from "react";
import { PostCard } from "@components";
import { useRouter } from "next/router";
import { getCategories, getCategoryPost } from "@services";
import { GetStaticPaths, GetStaticProps } from "next";
import { useTheme } from "@contexts/ThemeContext";

const CategoryPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [posts, setPosts] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchCategoryPosts = async () => {
      if (slug) {
        const categoryPosts = await getCategoryPost(slug as string);
        setPosts(categoryPosts);
      }
    };

    fetchCategoryPosts();
  }, [slug]);
  return (
    <main className={`w-full flex flex-col items-center bg-${theme}-background`}>
      <section className="container h-screen py-8 flex flex-row">
        {posts.map((post: any) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCategories();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = await getCategoryPost(slug);

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

export default CategoryPage;
