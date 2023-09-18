"use client";
import React, { useEffect, useState } from "react";
import { getPosts } from "@services";
import { PostCard } from "@components";
import { GetStaticProps } from "next";

const SectionPost: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPostsData = async () => {
      const data = await getPosts();
      setPosts(data);
    };

    getPostsData();
  }, []);

  return (
    <section className="container py-8 flex flex-row">
      {posts.map((post: any) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};

export default SectionPost;
