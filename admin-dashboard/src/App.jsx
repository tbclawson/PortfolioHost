import React, { useState, useEffect } from 'react';
import api from './api';
// import axios from 'axios';
import ProjectList from './components/ProjectList';
import AddProjectForm from './components/AddProjectForm';
import EditProjectForm from './components/EditProjectForm';
import LoginPage from './components/LoginPage';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isTokenValidated, setTokenValidated] = useState(false);
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [error, setError] = useState(false);


  useEffect(() => {
    const verifyToken = async () => {
      const existingToken = localStorage.getItem('token');
      if (existingToken) {
        try {
          await api.get('/Auth/verify', { timeout: 5000 });
          setToken(existingToken); // Token is valid
        } catch (error) {
          if (error.code === 'ECONNABORTED') {
            console.error('Request timed out');
            setError(true);
          }
          setTimeout(handleLogout(), 3000);
          // Token is invalid or expired
          
        }
      }
      setTokenValidated(true); // Mark validation as complete
    };
    verifyToken();
  }, []);


  // Fetch projects when the app loads
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      fetchProjects();
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  const fetchProjects = async () => {
    try {
      const response = await api.get('http://localhost:5098/api/Projects');
      setProjects(response.data);
    } catch (err) {
      console.error('Failed to fetch projects', err);
    }
  };

  const handleLoginSuccess = (newToken) => {
    setToken(newToken);
  }

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token')
  }

  if (!isTokenValidated) {
    return <div>Loading...</div>
  }

  if (!token) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  if (error) {
    return <div>Timeout error.</div>
  }



  const handleProjectAdded = (newProject) => {
    setProjects([...projects, newProject]);
  };


  const handleProjectDeleted = async (id) => {
    try {
      await api.delete(`http://localhost:5098/api/Projects/${id}`);
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
      <button onClick={handleLogout}>Logout</button>
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