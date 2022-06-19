import { CircularProgress, Container } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCourse } from '../redux/actions/coursesAction';
import Layout from '../components/layout';
import CourseCard from '../components/ui/courseCard';

const CourseDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const course = useSelector((state) => state.courses.course);

  useEffect(() => {
    if (dispatch && id) {
      dispatch(getCourse(id));
    }
  }, [dispatch, id]);
  return (
    <Layout>
      {course ? (
        <Container>
          <div className="mt-10 flex flex-col-reverse gap-x-20 md:flex-row md:mb-48">
            <div className="md:w-2/3">
              <h3 className="text-cardTitle text-xl font-extrabold mb-4">
                Title
              </h3>
              <h3 className="text-cardTitle font-bold">{course?.title}</h3>
              <h3 className="text-cardTitle text-xl font-extrabold mb-4 mt-16">
                Category
              </h3>
              <h3 className="text-cardTitle font-bold w-fit shadow-lg p-2 rounded-lg bg-footerBg">
                {course?.category}
              </h3>
              <h3 className="text-cardTitle text-xl font-extrabold mb-4 mt-16">
                Description
              </h3>
              <h3 className="text-cardTitle font-bold">
                {course?.description}
              </h3>
              <h3 className="text-cardTitle text-xl font-extrabold mb-4 mt-16">
                Price
              </h3>
              <h3 className="text-cardTitle font-bold">${course?.price}</h3>
            </div>
            <div className="md:w-1/3 flex justify-center mb-10 md:mb-0">
              <div className="h-fit sticky top-2 max-w-md">
                <CourseCard course={course} isCourseDetails={true} />
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <CircularProgress color="secondary" />
        </div>
      )}
    </Layout>
  );
};

export default CourseDetails;
