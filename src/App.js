import { gapi } from 'gapi-script';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CourseDetails from './pages/CourseDetails';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import { getUser } from './redux/actions/userAction';
import AuthProviders from './utils/Providers/auth.providers';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLINT_ID,
        scope: '',
      });

      gapi.load('client:auth2', start);
    };

    dispatch(getUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <AuthProviders>
              <Home />
            </AuthProviders>
          }
        />
        <Route
          path="/details/:id"
          element={
            <AuthProviders>
              <CourseDetails />
            </AuthProviders>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
