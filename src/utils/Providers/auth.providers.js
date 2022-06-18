import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AuthProviders = (props) => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !user?.email) {
      navigate('/');
    }
  }, [user, navigate]);

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default AuthProviders;
