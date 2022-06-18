import { Container } from '@mui/material';
import React from 'react';
import Layout from '../layout';
import LoginImg from '../../assets/images/login.jpg';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions/userAction';

const Login = () => {
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    dispatch(setUser(res.profileObj));
  };

  const onFailure = (res) => {
    console.log('LOGIN FAILED! res: ', res);
  };

  return (
    <Layout>
      <Container>
        <div className="flex justify-center mt-20">
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
