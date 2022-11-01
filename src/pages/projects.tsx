import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Project = {
  name: string
}
const PROJECTS = [
  {
    name: 'prj0',
  }, {
    name: 'prj1',
  }
]

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(()=>{
    console.log('useEffectが実行されました')
    setProjects(PROJECTS);
  },[projects])

  return (
    <div>
      {
        projects.map((project: Project) => {
          return (
            <Card sx={{ minWidth: 275, maxWidth: 320 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  {project.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          )
        })
      }
    </div>
  );
}
