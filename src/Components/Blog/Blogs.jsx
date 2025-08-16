import React, { useState } from 'react';
import { Link } from 'react-router';
import { blogPosts } from '../Blog/blogData.js';

const categories = ['All', 'Dog', 'Cat', 'Rabbit', 'Fish', 'Bird', 'Others'];

const Blogs = () => {
  const [filter, setFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  // Filter posts by category
  const filteredPosts =
    filter === 'All'
      ? blogPosts
      : blogPosts.filter(post => post.category === filter);

  // Show first 6 posts or all
  const postsToShow = showAll ? filteredPosts : filteredPosts.slice(0, 6);

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Pet Care & Adoption Tips
      </h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setShowAll(false); // reset showAll on category change
            }}
            className={`px-4 py-2 rounded-full font-semibold border transition ${
              filter === cat
                ? 'bg-orange-500  border-orange-500'
                : ' border-gray-300 hover:bg-orange-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {postsToShow.map(post => (
          <div
            key={post.id}
            className="rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={post.image_url}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm  mb-2">{post.date}</p>
              <p className=" mb-4">{post.excerpt}</p>
              <Link
                to={`/blog/${post.id}`}
                className="text-orange-500 font-semibold hover:text-orange-600 hover:underline transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}

        {postsToShow.length === 0 && (
          <p className="text-center col-span-full">
            No blog posts found in this category.
          </p>
        )}
      </div>

      {/* Show All / Show Less Button */}
      {filteredPosts.length > 6 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-orange-500 hover:bg-orange-600  px-6 py-2 rounded-md transition"
          >
            {showAll ? 'Show Less' : 'See All'}
          </button>
        </div>
      )}
    </section>
  );
};

export default Blogs;
