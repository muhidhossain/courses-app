import { Button } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses, updateSuccess } from '../../redux/actions/coursesAction';
import { button } from '../../utils/commonStyle';
import Layout from '../layout';
import AddCoursesModal from '../ui/AddCoursesModal';
import CourseCard from '../ui/courseCard';

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const courses = useSelector((state) => state.courses.courses);
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    dispatch(updateSuccess());
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  return (
    <Layout>
      <Container>
        <div className="flex justify-between items-center mt-10 mb-8">
          <h4 className="text-primary font-extrabold text-xl">Courses</h4>
          <Button color="primary" onClick={handleOpen} sx={button}>
            Add
          </Button>
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
    </Layout>
  );
};

export default Home;
