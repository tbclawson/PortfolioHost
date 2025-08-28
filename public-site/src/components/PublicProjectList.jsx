import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PublicProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5098/api/Projects');
        setProjects(response.data);
      } catch (err) {
        setError('Unable to load projects at this time.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>My Work</h2>
      {projects.map(project => (
        <div key={project.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">View Project</a>
          {' | '}
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
      ))}
    </div>
  );
}

export default PublicProjectList;