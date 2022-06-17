import { AppBar, Button, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar className="flex justify-between">
          <Link to="/">
            <h6 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Courses
            </h6>
          </Link>
          <Button
            color="primary"
            sx={{
              backgroundColor: '#475dff',
              fontWeight: '600',
              '&:hover': {
                backgroundColor: '#d3449e',
              },
            }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
