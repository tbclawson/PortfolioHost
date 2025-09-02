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
  Stack,
  CardActionArea,
} from '@mui/material';
import { href } from 'react-router-dom';



function ProjectCard({ project }) {

  const linkProps = project.githubUrl 
    ? {
      component: 'a',
      href: project.githubUrl,
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  : {};

  return (
    <Card
      sx={{
        height: '100%', // Makes cards in the same row have the same height
        minWidth: 260,
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 8,
        },
      }}
    >
      <CardActionArea {...linkProps}>
        <CardMedia
          component="img"
          height="160"
          // Use the imageUrl from the project data
          image={'/images.png' || project.imageUrl}
          alt={`Screenshot of ${project.title}`}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom align="center" variant="h5">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};





export default ProjectCard;