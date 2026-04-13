import React, { useState } from "react";
import { motion } from "framer-motion";

import Input from "../Component/Ui/Input";
import BlogCard from "../Component/Ui/BlogCard";
import Badge from "../Component/Ui/Badge";

import { blogs, categories } from "../data/BlogData";

/* ---------------- ANIMATION ---------------- */

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 }
};

export default function Blogs() {

  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [search, setSearch] = useState("");

  const filteredBlogs = blogs.filter((blog) => {

    const matchCategory =
      activeCategory === "All Articles" ||
      blog.category === activeCategory;

    const matchSearch =
      blog.title.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;

  });

  const featured = blogs[0];

  return (

<div className="bg-gradient-to-b from-white via-purple-50 to-white">

{/* HEADER */}

<section className="py-24 md:py-32 text-center px-6">

<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
>
<Badge>Blogs</Badge>

<h1 className="text-xl lg:text-3xl font-bold mt-4">
Insights & Resources
</h1>

<p className="text-gray-600 mt-6 max-w-xl mx-auto">
Learn about web performance, optimization,
automation systems and digital business growth.
</p>

</motion.div>

</section>


{/* FEATURED ARTICLE */}

<section className="max-w-6xl mx-auto px-6 mb-20">

<motion.div
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
whileHover={{ y: -4 }}
className="grid md:grid-cols-2 gap-8 bg-white border rounded-xl p-6 shadow-sm"
>

<div className="bg-gray-200 rounded-lg h-64" />

<div className="flex flex-col justify-center">

<Badge>
Featured Article
</Badge>

<h2 className="text-xl lg:text-2xl font-bold mt-4">
{featured.title}
</h2>

<p className="text-gray-600 mt-4">
{featured.excerpt}
</p>

<div className="text-sm text-gray-500 mt-4">
{featured.author} • {featured.date} • {featured.readTime}
</div>

</div>

</motion.div>

</section>


{/* SEARCH */}

<div className="max-w-3xl mx-auto px-6 mb-10">

<Input
placeholder="Search articles..."
value={search}
onChange={(e) => setSearch(e.target.value)}
/>

</div>


{/* CATEGORY FILTER */}

<div className="px-6 mb-14">

<div className="flex flex-wrap justify-center gap-3">

{categories.map((cat) => (

<motion.button
key={cat}
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
onClick={() => setActiveCategory(cat)}
className={`px-4 py-2 rounded-full border text-sm transition ${
activeCategory === cat
? "bg-purple-600 text-white border-purple-600"
: "bg-white hover:bg-purple-50"
}`}
>

{cat}

</motion.button>

))}

</div>

</div>


{/* RESULT COUNT */}

<div className="max-w-7xl mx-auto px-6 mb-6 text-sm text-gray-500">
Showing {filteredBlogs.length} articles
</div>


{/* BLOG GRID */}

<motion.section
variants={container}
initial="hidden"
animate="show"
className="max-w-7xl mx-auto px-6 pb-24"
>

<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-8
">

{filteredBlogs.length === 0 && (

<div className="col-span-full text-center py-20">

<h3 className="text-xl font-semibold mb-3">
No articles found
</h3>

<p className="text-gray-600">
Try adjusting your search or filters.
</p>

</div>

)}

{filteredBlogs.map((blog) => (

<motion.div
key={blog.id}
variants={fadeUp}
whileHover={{ y: -6 }}
transition={{ duration: 0.2 }}
>

<BlogCard blog={blog} />

</motion.div>

))}

</div>

</motion.section>

</div>

  );
}