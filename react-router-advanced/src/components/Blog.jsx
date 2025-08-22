import { Link } from "react-router-dom";

export default function Blog() {
  const posts = [
    { id: 1, title: "React Router Basics" },
    { id: 2, title: "Advanced Routing in React" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Blog</h1>
      <ul className="mt-4 list-disc pl-6 space-y-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              to={`/blog/${post.id}`}
              className="text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
