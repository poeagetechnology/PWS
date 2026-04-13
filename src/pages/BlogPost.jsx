import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../data/BlogData";

export default function BlogPost() {

  const { id } = useParams();

  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <div>Article not found</div>;

  return (

    <article className="max-w-4xl mx-auto px-6 py-24">

      <h1 className="text-xl lg:text-3xl font-bold mb-6">
        {blog.title}
      </h1>

      <div className="text-gray-500 mb-8">
        {blog.author} • {blog.date} • {blog.readTime}
      </div>

      <div className="prose max-w-none text-gray-700 whitespace-pre-line">

        {blog.content}

      </div>

    </article>

  );
}