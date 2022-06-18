import { Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className="bg-footerBg py-8 mt-10">
      <Container>
        <div className="sm:flex sm:justify-between">
          <div>
            <Link to="/">
              <h6 className="text-3xl w-fit font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Courses
              </h6>
            </Link>
            <div className="flex align-middle mt-4">
              <CallIcon color="info" />
              <p className="text-info ml-2">+8801791127</p>
            </div>
            <div className="flex align-middle mt-2">
              <EmailIcon color="info" />
              <p className="text-info ml-2">name@courses.com</p>
            </div>
            <p className="text-info mt-4">
              Terms & Conditions | Refund Policy | Privacy Polity
            </p>
          </div>
          <div className="mt-6 sm:mt-0">
            <h6 className=" text-info text-lg font-bold">Links</h6>
            <p className=" text-info text-lg mt-4">About us</p>
            <p className=" text-info text-lg mt-1">Help</p>
          </div>
          <div className="mt-6 sm:mt-0">
            <h6 className=" text-info text-lg font-bold">Social Links</h6>
            <div className="my-4">
              <FacebookIcon color="info" sx={{ fontSize: '35px' }} />
              <InstagramIcon color="info" sx={{ fontSize: '35px' }} />
              <LinkedInIcon color="info" sx={{ fontSize: '35px' }} />
            </div>
            <small className="text-info">
              {new Date().getFullYear()} © Courses
            </small>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
