import React, { useState, ChangeEvent } from "react";
import FantasyMovieForm from "../components/fantasyMovieForm";
import { FantasyMovie } from "../types/interfaces";
import { SubmitHandler } from "react-hook-form";

const FantasyMoviePage: React.FC = () => {
  const [formData, setFormData] = useState<FantasyMovie>({
    title: "",
    overview: "",
    genres: "",
    releaseDate: "",
    runtime: 0,
    productionCompanies: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit: SubmitHandler<FantasyMovie> = (data) => {
    
    console.log("Form submitted:", data);
    // Here you can perform further actions with the form data
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My fantasy movie</h1>
      <FantasyMovieForm
        movieDetails={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default FantasyMoviePage;
