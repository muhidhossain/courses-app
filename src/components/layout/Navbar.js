import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = useSelector((state) => state.user.user);

  const onSuccess = () => {
    console.log('Logout successful!');
  };

  const onFailure = () => {
    console.log('Logout failed!');
  };

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar className="flex justify-between">
          <Link to="/">
            <h6 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Courses
            </h6>
          </Link>
          {user?.email && (
            <div className="flex items-center">
              <img
                className="mr-4 h-10 w-10 rounded-3xl"
                src={user?.imageUrl}
                alt="profile"
              />
              <GoogleLogout
                clientId={process.env.REACT_APP_GOOGLE_CLINT_ID}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
                onFailure={onFailure}
              />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
