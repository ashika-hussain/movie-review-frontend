/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const FantasyMovieForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    reset,
  } = useForm();

  const [open, setOpen] = useState(false);

  const handleSnackClose = () => {
    setOpen(false);
  };

  const onSubmit: SubmitHandler<any> = () => {
    // Handle form submission (e.g., send data to server)
    setOpen(true); // Show success message
    // Reset form
    reset({
      title: "",
      story: "",
      poster: "",
    });
  };

  return (
    <Box>
      <Typography component="h2" variant="h3">
        Write a Fantasy Movie
      </Typography>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleSnackClose}
      >
        <Alert severity="success" variant="filled" onClose={handleSnackClose}>
          <Typography variant="h4">Fantasy movie submitted successfully!</Typography>
        </Alert>
      </Snackbar>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              margin="normal"
              fullWidth
              required
              id="title"
              label="Title"
            />
          )}
        />
        <Controller
          name="story"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              margin="normal"
              fullWidth
              required
              multiline
              minRows={10}
              id="story"
              label="Story"
            />
          )}
        />
        <Controller
          name="poster"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              margin="normal"
              fullWidth
              required
              id="poster"
              label="Poster URL"
            />
          )}
        />
        <Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginRight: 2 }}
          >
            Submit
          </Button>
          <Button
            type="reset"
            variant="contained"
            color="secondary"
            onClick={() => reset()}
          >
            Reset
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default FantasyMovieForm;
