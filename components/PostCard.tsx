import React from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { useTheme } from "@contexts/ThemeContext";

interface PostCardProps {
  post: {
    author: {
      bio: string;
      id: string;
      name: string;
      photo: {
        url: string;
      };
    };
    createdAt: string;
    slug: string;
    title: string;
    excerpt: string;
    featuredImage: {
      url: string;
    };
    categories: {
      name: string;
      slug: string;
    };
    content: {
      text: string;
    }[];
    viewcount: number;
  };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { theme } = useTheme();
  return (
    <div className="w-1/4 flex flex-col mx-4">
      <Link href={`/posts/${post.slug}`}>
        <div className="rounded-[28px] shadow-lg relative">
          <Image
            src={post.featuredImage.url}
            alt={post.title}
            width={300}
            height={262}
          />
          <p className={`flex flex-row justify-between text-xs font-normal text-${theme}-text p-2 absolute bottom-0 right-0 gap-1 bg-black`}>
            <span>{post.viewcount}</span>
            views
          </p>
        </div>
      </Link>
      <div className="py-4">
        <p className="text-fuchsia-500 text-xs font-normal pb-4">
          {post.categories.name}
        </p>
        <Link href={`/posts/${post.slug}`}>
          <h2 className={`text-xl font-semibold tracking-tight pb-4 text-${theme}-text`}>
            {post.title}
          </h2>
        </Link>
        <p className={`flex flex-row justify-between text-xs font-normal text-${theme}-text`}>
          {post.author.name}
          <span>{moment(post.createdAt).startOf('minute').fromNow()}</span>
        </p>
      </div>
    </div>
  );
};

export default PostCard;
