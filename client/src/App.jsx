import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://database-driven-app-6ix4.onrender.com"; // frontend now points to deployed backend

export default function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await fetch(`${API_URL}/posts`);
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
    const interval = setInterval(fetchPosts, 5000); // poll every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>📚 Blog Posts</h1>

      <div className="center-button">
        <Link to="/new">Add New Post</Link>
      </div>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>{new Date(post.created_at).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
