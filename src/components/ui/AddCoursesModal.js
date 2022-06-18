import { Button, Modal, Snackbar, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { button, outlinedButton } from '../../utils/commonStyle';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addCourse } from '../../redux/actions/coursesAction';
import MuiAlert from '@mui/material/Alert';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '95%',
  maxWidth: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '6px',
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AddCoursesModal = ({ open, handleClose }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const { loading, success } = useSelector((state) => state.courses);

  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addCourse(data));
  };

  useEffect(() => {
    if (success?.id) {
      setSnackbarOpen(true);
    }
  }, [success]);

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
        <Box sx={style}>
          <h6 className="text-primary font-extrabold">Add Course</h6>
          <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="title"
              control={control}
              rules={{ required: true }}
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
              </Button>{' '}
              <Button disabled={loading} sx={button} type="submit">
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
          severity="success"
          sx={{ width: '100%' }}
        >
          Course added successfully
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AddCoursesModal;
