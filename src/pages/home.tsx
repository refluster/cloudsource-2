import React from 'react';
import { Outlet, useNavigate, useLocation, NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useAuthenticator } from '@aws-amplify/ui-react';

export default function Home() {
    const { route, signOut } = useAuthenticator((context) => [
        context.route,
        context.signOut,
    ]);
    const navigate = useNavigate();
    function logOut() {
        signOut();
        navigate('/login');
    }

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
                <ListItem key={'project'} component="div" disablePadding>
                    <ListItemButton href="/project">
                        Project
                    </ListItemButton>
                </ListItem>
            </List>
            <Box>
                {route === 'authenticated' ? 'You are logged in!' : 'Please Login!'}
            </Box>
        </Box>
    );
}
