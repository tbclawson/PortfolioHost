import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This function fetches the data from your API
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5098/api/Projects');
        setProjects(response.data);
      } catch (err) {
        setError('Failed to fetch projects. Make sure the API is running.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading projects...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>My Projects</h2>
      {projects.length === 0 ? (
        <p>No projects found. You can add one!</p>
      ) : (
        <ul>
          {projects.map(project => (
            <li key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProjectList;