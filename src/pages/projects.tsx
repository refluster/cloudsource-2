import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Project } from '../types/project.d';
import api from '../api/project';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(()=>{
    console.log('useEffectが実行されました')
    getProjects()
  }, [])

  const getProjects = async () => {
    try {
      const _projects = await api.getProjects();
      if (_projects !== undefined) {
        setProjects(_projects);
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Box>
      <Typography variant="h3">
        Projects
      </Typography>
      <Box sx={{
        display: 'flex',
        py: 8,
        px: 6,
        gap: 4,
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {
          projects.map((project: Project) => {
            return (
              <Card sx={{ minWidth: 275, maxWidth: 320 }}
                key={project.id}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {project.name}
                  </Typography>
                  <Typography sx={{mt: 1.5}} variant="body2">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions >
                  <Button size="small" href={'/project/' + project.id}>Learn More</Button>
                </CardActions>
              </Card>
            )
          })
        }
      </Box>
    </Box>

  );
}
