import { Button, Container } from '@mui/material';
import React, { useState } from 'react';
import Layout from '../layout';
import LoginImg from '../../assets/images/login.jpg';
import CreatorImg from '../../assets/images/creator.jpg';

const Login = () => {
  const [userType, setUserType] = useState('learner');

  return (
    <Layout>
      <Container>
        <div className="flex justify-center mt-20">
          <div className="p-3 shadow-md rounded-md max-w-xs">
            <div>
              <Button
                sx={{
                  color: `${userType === 'learner' ? '#475dff' : 'black'}`,
                  fontWeight: '600',
                  borderBottom: `2px solid ${
                    userType === 'learner' ? '#475dff' : '#757da2'
                  }`,
                  borderRadius: '0',
                  width: '50%',
                }}
                onClick={() => setUserType('learner')}
              >
                Learner
              </Button>
              <Button
                sx={{
                  color: `${userType === 'creator' ? '#475dff' : 'black'}`,
                  fontWeight: '600',
                  borderBottom: `2px solid ${
                    userType === 'creator' ? '#475dff' : '#757da2'
                  }`,
                  borderRadius: '0',
                  width: '50%',
                }}
                onClick={() => setUserType('creator')}
              >
                Creator
              </Button>
            </div>
            {userType === 'learner' ? (
              <div className="flex justify-center">
                <img className="h-60 w-60" src={LoginImg} alt="login" />
              </div>
            ) : (
              <div className="flex justify-center">
                <img className="h-60 w-60" src={CreatorImg} alt="login" />
              </div>
            )}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Login;
