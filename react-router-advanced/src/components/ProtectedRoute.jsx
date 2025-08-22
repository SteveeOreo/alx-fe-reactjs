import { Navigate } from "react-router-dom";

// simple auth hook (mock)
function useAuth() {
  // In real apps, check login state from context or localStorage
  const isAuthenticated = false; // change to true for testing
  return { isAuthenticated };
}

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
