import React, { useState } from 'react';
import api from '../api';

function AddProjectForm({ onProjectAdded }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [projectUrl, setProjectUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const newProject = {
      title,
      description,
      projectUrl,
      githubUrl,
      // You can add ImageUrl or other fields here if needed
    };

    try {
      const response = await api.post('http://localhost:5098/api/Projects', newProject);
      onProjectAdded(response.data); // Notify the parent component
      // Clear the form
      setTitle('');
      setDescription('');
      setProjectUrl('');
      setGithubUrl('');
    } catch (err) {
      setError('Failed to add project. Please try again.');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Project</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>Title:</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Project URL:</label>
        <input 
          type="text" 
          value={projectUrl} 
          onChange={(e) => setProjectUrl(e.target.value)} 
        />
      </div>
      <div>
        <label>GitHub URL:</label>
        <input 
          type="text" 
          value={githubUrl} 
          onChange={(e) => setGithubUrl(e.target.value)} 
        />
      </div>
      <button type="submit">Add Project</button>
    </form>
  );
}

export default AddProjectForm;