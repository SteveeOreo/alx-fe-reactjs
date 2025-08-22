// src/pages/BlogPost.jsx
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Blog Post #{id}</h2>
      <p className="text-gray-700">
        This is the content of blog post <span className="font-semibold">{id}</span>.
      </p>
    </div>
  );
}

export default BlogPost;
