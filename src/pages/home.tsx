import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Home() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <List sx={{
                maxWidth: 320,
                minWidth: 280,
            }}>
                <ListItem key={'login'} component="div" disablePadding>
                    <ListItemButton href="/login">
                        Login
                    </ListItemButton>
                </ListItem>
                <ListItem key={'projects'} component="div" disablePadding>
                    <ListItemButton href="/projects">
                        Projects
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
}
