import React from "react";
import { Link } from "react-router-dom";
import Card from "../Ui/Card";
import Badge from "../Ui/Badge";
import Button from "../Ui/Button";

export default function BlogCard({ blog, size = "md" }) {

  const sizes = {
    sm: "h-32",
    md: "h-40",
    lg: "h-56"
  };

  return (
    <Card hover>

      <div className={`${sizes[size]} bg-gray-200 rounded-lg mb-4`} />

      <Badge>{blog.category}</Badge>

      <h3 className="font-semibold text-lg mt-3">
        {blog.title}
      </h3>

      <p className="text-gray-600 mt-2 text-sm">
        {blog.excerpt}
      </p>

      <div className="text-gray-500 text-xs mt-4">
        {blog.author} • {blog.date} • {blog.readTime}
      </div>

      <Link to={`/blogs/${blog.id}`}>
        <Button className="mt-4" size="sm">
          Read More
        </Button>
      </Link>

    </Card>
  );
}