import { Button, Modal, Snackbar, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { button, modalStyle, outlinedButton } from '../../utils/commonStyle';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCourse, updateCourse } from '../../redux/actions/coursesAction';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const EditCoursesModal = ({ open, handleClose, course }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const { editLoading, editSuccess, deleteSuccess, deleteLoading } =
    useSelector((state) => state.courses);

  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.id = course?.id;
    dispatch(updateCourse(data));
  };

  const handleDelete = () => {
    dispatch(deleteCourse(course?.id));
  };

  useEffect(() => {
    if (editSuccess?.id || deleteSuccess?.id) {
      setSnackbarOpen(true);
    }
  }, [editSuccess, deleteSuccess]);

  const closeModal = () => {
    reset();
    handleClose();
  };

  const snackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    reset();
    setSnackbarOpen(false);
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <div className="flex justify-between items-center">
            <h6 className="text-primary font-extrabold">Edit Course</h6>
            <Button
              onClick={handleDelete}
              disabled={deleteLoading}
              sx={{
                color: 'red',
                border: '2px solid red',
                fontWeight: '600',
                '&:hover': { color: 'red', border: '2px solid red' },
              }}
              variant="outlined"
            >
              Delete
            </Button>
          </div>

          <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="title"
              control={control}
              rules={{ required: true }}
              defaultValue={course?.title}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.title}
                  id="standard-error-helper-text"
                  label="Title"
                  helperText={errors.title && 'Title is required'}
                  variant="standard"
                  color="info"
                  sx={{ width: '100%' }}
                />
              )}
            />
            <Controller
              name="price"
              control={control}
              rules={{ required: true }}
              defaultValue={course?.price}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.price}
                  id="standard-error-helper-text"
                  label="Price"
                  helperText={errors.price && 'Price is required'}
                  variant="standard"
                  color="info"
                  type="number"
                  sx={{ width: '100%', marginTop: '10px' }}
                />
              )}
            />
            <Controller
              name="description"
              control={control}
              rules={{ required: true }}
              defaultValue={course?.description}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.description}
                  id="standard-error-helper-text"
                  label="Description"
                  helperText={errors.description && 'Description is required'}
                  multiline
                  rows={4}
                  variant="standard"
                  color="info"
                  sx={{ width: '100%', marginTop: '10px' }}
                />
              )}
            />
            <Controller
              name="image"
              control={control}
              rules={{ required: true }}
              defaultValue={course?.image}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.image}
                  id="standard-error-helper-text"
                  label="Image URL"
                  helperText={errors.image && 'Image URL is required'}
                  variant="standard"
                  color="info"
                  sx={{ width: '100%', marginTop: '10px' }}
                />
              )}
            />

            <Controller
              name="category"
              control={control}
              rules={{ required: true }}
              defaultValue={course?.category}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.category}
                  id="standard-error-helper-text"
                  label="Category"
                  helperText={errors.category && 'Category is required'}
                  variant="standard"
                  color="info"
                  sx={{ width: '100%', marginTop: '10px' }}
                />
              )}
            />

            <div className="flex justify-end gap-x-2 mt-10">
              <Button
                onClick={closeModal}
                sx={outlinedButton}
                variant="outlined"
              >
                Cancel
              </Button>
              <Button disabled={editLoading} sx={button} type="submit">
                Save
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={snackbarClose}
      >
        <Alert
          onClose={snackbarClose}
          severity={editSuccess?.id ? 'success' : 'error'}
          sx={{ width: '100%' }}
        >
          {editSuccess?.id
            ? 'Course updated successfully'
            : 'Course deleted successfully'}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default EditCoursesModal;
