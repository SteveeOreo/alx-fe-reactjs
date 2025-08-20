import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PostsComponent from './components/PostsComponent';
// Import Tailwind CSS (or similar) here if you have it.
import './index.css';

// Create a client instance of QueryClient.
const queryClient = new QueryClient({
  // Optional: You can configure default options for all queries here.
  defaultOptions: {
    queries: {
      // Set data to stale immediately to demonstrate refetching on demand.
      // In a real app, you might set a longer staleTime.
      staleTime: 0,
    },
  },
});

/**
 * The main application component.
 * It wraps the entire application with QueryClientProvider to make
 * the query client instance available to any nested components.
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;