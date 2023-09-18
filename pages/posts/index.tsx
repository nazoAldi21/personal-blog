"use client";
import React, { useEffect, useState } from "react";
import { getPosts } from "@services";
import { PostCard } from "@components";
import { GetStaticProps } from "next";
import { useTheme } from "@contexts/ThemeContext";

const SectionPost: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { theme } = useTheme();

  const handleSearch = async () => {
    try {
      const data = await getPosts(); // Fetch posts
      const filteredPosts = data.filter((post : any) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setPosts(filteredPosts);
    } catch (error) {
      console.error('Error searching for posts:', error);
    }
  };

  useEffect(() => {
    const getPostsData = async () => {
      const data = await getPosts();
      setPosts(data);
    };

    getPostsData();
  }, []);

  return (
    <section className="container h-screen py-8 flex flex-col">
      <div className="my-3 flex justify-start fixed z-50 top-0 right-1/2">
      <input
        type="text"
        placeholder="Search Blog"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={`text-xl focus:outline-none focus-visible:none px-2 py-1 rounded-lg input-${theme}-bg`}
      />
      <button onClick={handleSearch} className={`rounded-lg button-${theme}-search px-2 focus:outline-none focus-visible:none`}>Search</button>
      </div>
      <div className="flex flex-row">
      {posts.map((post: any) => (
        <PostCard key={post.slug} post={post} />
      ))}
      </div>
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
