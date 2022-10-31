import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div>
        <h2>Home</h2>
        <NavLink to="/login">login</NavLink>
    </div>
  );
}
