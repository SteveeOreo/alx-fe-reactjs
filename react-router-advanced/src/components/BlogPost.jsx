import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();
  return (
    <div className="p-6">
      <h2 className="text-xl">Blog Post ID: {id}</h2>
      <p>This is content for blog post #{id}.</p>
    </div>
  );
}
