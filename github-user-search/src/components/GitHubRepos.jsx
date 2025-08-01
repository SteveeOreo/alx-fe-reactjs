import { useEffect, useState } from "react";
import { fetchUserRepos } from "./services/GitHubService";

function GitHubRepos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchUserRepos().then(setRepos).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Your GitHub Repos</h2>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank">{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GitHubRepos;
