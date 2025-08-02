// githubService.js
import axios from "axios";

export const fetchUserData = async (username, location, minRepos) => {
  // If only username is provided, use the old endpoint
  if (username && !location && !minRepos) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  }

  // Advanced search: build query
  let queryParts = [];
  if (username) queryParts.push(`${username} in:login`);
  if (location) queryParts.push(`location:${location}`);
  if (minRepos) queryParts.push(`repos:>=${minRepos}`);

  const query = queryParts.join(' ');
  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching advanced user search:', error);
    throw error;
  }
};