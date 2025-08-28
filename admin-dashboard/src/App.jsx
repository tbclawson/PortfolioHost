import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectList from './components/ProjectList';
import AddProjectForm from './components/AddProjectForm';
import EditProjectForm from './components/EditProjectForm';

function App() {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:5098/api/Projects');
      setProjects(response.data);
    } catch (err) {
      console.error('Failed to fetch projects', err);
    }
  };

  // Fetch projects when the app loads
  useEffect(() => {
    fetchProjects();
  }, []);

  const handleProjectAdded = (newProject) => {
    setProjects([...projects, newProject]);
  };


  const handleProjectDeleted = async (id) => {
    try {
      await axios.delete(`http://localhost:5098/api/Projects/${id}`);
      setProjects(projects.filter(p => p.id !== id));
    } catch (err) {
      console.error('Failed to delete project', err);
    }
  };

  const handleProjectUpdated = (updatedProject) => {
    setProjects(projects.map(p => p.id === updatedProject.id ? updatedProject : p));
    setEditingProject(null); // Exit editing mode
  };


  return (
    <div>
      <h1>Admin Dashboard</h1>
      {editingProject ? (
        <EditProjectForm
          project={editingProject}
          onProjectUpdated={handleProjectUpdated}
          onCancel={() => setEditingProject(null)}
        />
      ) : (
        <AddProjectForm onProjectAdded={handleProjectAdded} />
      )}
      <ProjectList
        projects={projects}
        onProjectDeleted={handleProjectDeleted}
        onEditProject={setEditingProject} // Pass the function to start editing
      />
    </div>
  );


}

export default App;