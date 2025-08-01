const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserRepos = async () => {
  try {
    const response = await fetch("https://api.github.com/user/repos", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/vnd.github+json",
      },
    });

    if (!response.ok) throw new Error("Failed to fetch repos");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("GitHub API Error:", error);
    throw error;
  }
};
