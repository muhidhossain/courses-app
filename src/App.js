import { gapi } from 'gapi-script';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import { getUser } from './redux/actions/userAction';

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
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
