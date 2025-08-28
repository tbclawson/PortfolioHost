import React from 'react';

// Accept onProjectDeleted as a prop
function ProjectList({ projects, onProjectDeleted, onEditProject }) {
  if (!projects) {
    return <div>Loading projects...</div>;
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
              {/* Add the edit button */}
              <button onClick={() => onEditProject(project)}>
                Edit
              </button>
              <button onClick={() => onProjectDeleted(project.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProjectList;