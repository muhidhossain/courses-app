import { Button, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { button, outlinedButton } from '../../utils/commonStyle';
import EditIcon from '@mui/icons-material/Edit';
import EditCoursesModal from './EditCoursesModal';
import {
  updateDeleteSuccess,
  updateEditSuccess,
} from '../../redux/actions/coursesAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SuccessModal from './SuccessModal';

const CourseCard = ({ course, isCourseDetails }) => {
  const [open, setOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    dispatch(updateEditSuccess());
    dispatch(updateDeleteSuccess());
    setOpen(false);
  };

  const handleSuccessOpen = () => {
    setSuccessOpen(true);
  };

  const handleSuccessClose = () => {
    setSuccessOpen(false);
  };

  return (
    <div className="rounded-xl overflow-hidden shadow-xl duration-100 hover:shadow-2xl relative">
      {user?.creator && (
        <IconButton
          color="primary"
          sx={{ ...button, position: 'absolute', right: '10px', top: '10px' }}
          size="small"
          onClick={handleOpen}
        >
          <EditIcon fontSize="small" />
        </IconButton>
      )}
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
        {isCourseDetails ? (
          <Button onClick={handleSuccessOpen} sx={outlinedButton}>
            Purchase
          </Button>
        ) : (
          <Link to={`/details/${course?.id}`}>
            <Button sx={outlinedButton}>View Course</Button>
          </Link>
        )}
      </div>
      <EditCoursesModal open={open} handleClose={handleClose} course={course} />
      <SuccessModal open={successOpen} handleClose={handleSuccessClose} />
    </div>
  );
};

export default CourseCard;
