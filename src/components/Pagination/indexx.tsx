import React from "react";
import Box from "@mui/material/Box"; 
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typography from "@mui/material/Typography";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const styles = {
    paginationContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "20px",
    },
    paginationButton: {
      padding: "10px",
      margin: "0 5px",
      border: "none",
      backgroundColor: "transparent",
      color: "blue",
      cursor: "pointer",
      outline: "none",
    },
    paginationText: {
      margin: "0 10px",
      fontSize: "16px",
      fontWeight: "bold",
      color: "black",
    },
  };

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <Box sx={styles.paginationContainer}>
    <IconButton
      style={styles.paginationButton}
      onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
      disabled={currentPage === 1}
    >
      <ArrowBackIcon />
    </IconButton>
    <Typography sx={styles.paginationText}>
      Page {currentPage} of {totalPages}
    </Typography>
    <IconButton
      style={styles.paginationButton}
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      <ArrowForwardIcon />
    </IconButton>
  </Box>
);
};

export default Pagination;


