import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import Layout from '../components/layout';
import LoginImg from '../assets/images/login.jpg';
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      navigate('/home');
    }
  }, [user, navigate]);

  const onSuccess = (res) => {
    dispatch(setUser(res.profileObj));
    navigate('/home');
  };

  const onFailure = (res) => {
    console.log('LOGIN FAILED!');
  };

  return (
    <Layout footer={false}>
      <Container>
        <div className="flex justify-center mt-20 sm:mb-72">
          <div className="p-3 shadow-md rounded-md w-full sm:w-96">
            <h6 className="text-xl font-bold text-center text-primary">
              Login
            </h6>
            <div className="flex justify-center">
              <img className="h-64 w-full" src={LoginImg} alt="login" />
            </div>

            <div className="flex justify-center pb-4">
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLINT_ID}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
              />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Login;
