import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  CircularProgress,
  Box,
} from '@mui/material';
import ProjectCard from './ProjectCard';

function PublicProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setTimeout(async () => {
        try {
          const response = await axios.get('http://192.168.50.200:5098/api/Projects');
          setProjects(response.data);
        } catch (err) {
          setError(`Unable to load projects at this time.\n${err}`);
          console.error(err);
        } finally {
          setLoading(false);
        }
      }, 1500);
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" align="center" sx={{ mt: 4 }}>
        {error}
      </Typography>
    );
  }


  return (
    <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
      <Grid container spacing={4}>
        {projects.map((project) => (
          // FIXED: Grid props are now correct ('item', 'xs', 'sm', 'md')
          <Grid key={project.id} size = {{xs:12, sm:6, md:4}}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );

}

export default PublicProjectList;