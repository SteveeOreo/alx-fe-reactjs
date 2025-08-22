import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";       // ✅ Add Blog
import BlogPost from "./components/BlogPost"; // ✅ Now this exists
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        {/* Navbar */}
        <nav className="bg-blue-600 text-white shadow-md">
          <div className="container mx-auto flex justify-between items-center p-4">
            <h1 className="text-xl font-bold">My React Router App</h1>
            <div className="space-x-4">
              <NavLink to="/" end>Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/profile">Profile</NavLink>
              <NavLink to="/blog">Blog</NavLink> {/* ✅ Go to Blog list */}
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route
              path="/profile/*"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            {/* ✅ Blog routes */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
