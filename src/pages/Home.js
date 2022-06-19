import { Button, CircularProgress } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCourses,
  removeCourse,
  updateAddSuccess,
} from '../redux/actions/coursesAction';
import { button } from '../utils/commonStyle';
import Layout from '../components/layout';
import AddCoursesModal from '../components/ui/AddCoursesModal';
import CourseCard from '../components/ui/courseCard';

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const courses = useSelector((state) => state.courses.courses);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    dispatch(updateAddSuccess());
    setOpen(false);
  };

  useEffect(() => {
    if (dispatch) {
      dispatch(getCourses());
    }
    dispatch(removeCourse());
  }, [dispatch]);

  return (
    <Layout>
      {courses[0] ? (
        <Container>
          <div className="flex justify-between items-center mt-10 mb-8">
            <h4 className="text-primary font-extrabold text-xl">Courses</h4>
            {user?.creator && (
              <Button color="primary" onClick={handleOpen} sx={button}>
                Add
              </Button>
            )}
          </div>
          <div className="flex justify-around flex-wrap gap-10">
            {courses?.map((course) => (
              <div className="max-w-xs w-full" key={course?.id}>
                <CourseCard course={course} />
              </div>
            ))}
          </div>
          <AddCoursesModal open={open} handleClose={handleClose} />
        </Container>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <CircularProgress color="secondary" />
        </div>
      )}
    </Layout>
  );
};

export default Home;
