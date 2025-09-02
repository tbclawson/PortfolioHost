import React, { useState, useEffect } from 'react';
import api from '../api';

function EditProjectForm({ project, onProjectUpdated, onCancel }) {
  const [formData, setFormData] = useState({ ...project });

  useEffect(() => {
    setFormData({ ...project });
  }, [project]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`http://localhost:5098/api/Projects/${project.id}`, formData);
      onProjectUpdated(formData);
    } catch (err) {
      console.error('Failed to update project', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Project</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Project URL:</label>
        <input 
          type="text" 
          name="projectUrl"
          value={formData.projectUrl} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>GitHub URL:</label>
        <input 
          type="text" 
          name="githubUrl"
          value={formData.githubUrl} 
          onChange={handleChange} 
        />
      </div>
      <button type="submit">Save Changes</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
}

export default EditProjectForm;