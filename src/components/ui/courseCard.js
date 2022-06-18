import { Button } from '@mui/material';
import React from 'react';
import { outlinedButton } from '../../utils/commonStyle';

const CourseCard = ({ course }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-xl duration-100 hover:shadow-2xl">
      <div className="flex justify-center h-60 self-center bg-cardBg p-2">
        <img
          className="h-full w-fit rounded-xl"
          src={course?.image}
          alt="course"
        />
      </div>
      <div className="p-4">
        <h4 className="text-cardTitle font-bold mb-4">
          {course?.title.slice(0, 30)}...
        </h4>
        <p className="text-info">{course?.description.slice(0, 80)}...</p>
      </div>
      <div className="flex justify-between items-center bg-cardBottomBg p-4">
        <p className="text-secondary font-extrabold">${course?.price}</p>
        <Button sx={outlinedButton}>View Course</Button>
      </div>
    </div>
  );
};

export default CourseCard;
