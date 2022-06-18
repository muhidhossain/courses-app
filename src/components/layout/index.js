import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children, footer = true }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}

      {footer && <Footer />}
    </React.Fragment>
  );
};

export default Layout;
