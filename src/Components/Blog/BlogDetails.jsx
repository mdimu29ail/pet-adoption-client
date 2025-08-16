import React from 'react';
import { useParams, Link } from 'react-router';
import { blogPosts } from '../Blog/blogData.js';

const BlogDetails = () => {
  const { id } = useParams(); // Get blog id from URL
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="py-8 text-center">
        <p>Blog post not found.</p>
        <Link to="/blogs" className="underline mt-4 block">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{post.title}</h2>

      <img
        src={post.image_url}
        alt={post.title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <p className="mb-4">{post.date}</p>
      <p className="mb-4">{post.excerpt}</p>
      <p>{post.content || 'Full blog content goes here...'}</p>
      <Link to="/blogs" className="underline mt-4 block">
        Back to Blogs
      </Link>
    </div>
  );
};

export default BlogDetails;
