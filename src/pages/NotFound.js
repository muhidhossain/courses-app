import React from 'react';

const NotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <h1 className="text-9xl font-extrabold text-secondary text-center">
          404
        </h1>
        <h2 className="text-4xl font-extrabold text-center">PAGE NOT FOUND</h2>
        <p className="text-center text-info font-bold mt-2">
          The page you requested could not be found
        </p>
      </div>
    </div>
  );
};

export default NotFound;
