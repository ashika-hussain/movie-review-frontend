import React, { ChangeEvent, FormEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Snackbar, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import { FantasyMovie } from "../../types/interfaces";
import styles from "../reviewForm/style";
import { useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";

interface FantasyMovieFormProps {
  movieDetails: FantasyMovie;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: SubmitHandler<FantasyMovie>;
}

const FantasyMovieForm: React.FC<FantasyMovieFormProps> = ({
  movieDetails,
  handleChange,
  handleSubmit
}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSnackClose = () => {
    setOpen(false);
    navigate("/");
  };
   const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit(e as unknown as FantasyMovie);
    setOpen(true)
  };

  return (
    <form onSubmit={handleFormSubmit} style={{ width: "70%", margin: "0 auto" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <TextField
          label="Title"
          variant="outlined"
          name="title"
          value={movieDetails.title}
          onChange={handleChange}
        />
        <TextField
          label="Overview"
          variant="outlined"
          multiline
          rows={4}
          name="overview"
          value={movieDetails.overview}
          onChange={handleChange}
        />
        <TextField
          label="Genres"
          variant="outlined"
          name="genres"
          value={movieDetails.genres}
          onChange={handleChange}
        />
        <TextField
          label="Release Date"
          variant="outlined"
          type="date"
          name="releaseDate"
          value={movieDetails.releaseDate}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Runtime"
          variant="outlined"
          name="runtime"
          value={movieDetails.runtime.toString()} // Convert to string
          onChange={handleChange}
        />
        <TextField
          label="Production Companies"
          variant="outlined"
          name="productionCompanies"
          value={movieDetails.productionCompanies}
          onChange={handleChange}
        />
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "20px" }}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
      <Snackbar
        sx={styles.root}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleSnackClose}
      >
        <Alert severity="success" variant="filled" onClose={handleSnackClose}>
          <Typography variant="h4">Thank you for submitting a review</Typography>
        </Alert>
      </Snackbar>
    </form>
  );
};

export default FantasyMovieForm;
