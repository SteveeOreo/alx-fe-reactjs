import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  // Simulate a small delay to make the loading state more visible.
  await new Promise(resolve => setTimeout(resolve, 500));
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

/**
 * A component to fetch, display, and manage posts from a public API using React Query.
 */
const PostsComponent = () => {
  /**
   * Use the useQuery hook to manage the data fetching lifecycle.
   *
   * The first argument is the query key, a unique string or array that React Query
   * uses to identify and cache the data. This is crucial for refetching and sharing.
   *
   * The second argument now references the named `fetchPosts` function.
   */
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
  });

  // Handle the loading state.
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-xl text-gray-700 animate-pulse">Loading posts...</div>
      </div>
    );
  }

  // Handle the error state.
  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-red-100">
        <div className="text-xl text-red-700">Error fetching data.</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Posts</h1>
        <button
          onClick={() => refetch()}
          className="px-4 py-2 text-sm md:text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
        >
          Refetch Posts
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map(post => (
          <div
            key={post.id}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-blue-800">
              {post.title}
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              {post.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsComponent;
