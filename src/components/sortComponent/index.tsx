import React from "react";
import Button from "@mui/material/Button";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import EventIcon from "@mui/icons-material/Event";
import { styled } from "@mui/material/styles";

interface SortButtonProps {
  sortBy: string;
  onClick: () => void;
}

const StyledButton = styled(Button)({
  margin: "8px",
});

const SortButton: React.FC<SortButtonProps> = ({ sortBy, onClick }) => {
 

  const renderIcon = () => {
    switch (sortBy) {
      case "name":
        return <SortByAlphaIcon />;
      case "release_date":
        return <EventIcon />;
      default:
        return <SortByAlphaIcon />;
    }
  };

  const renderLabel = () => {
    switch (sortBy) {
      case "name":
        return "Sort by Name";
      case "release_date":
        return "Sort by Release Date";
      default:
        return "Sort by Name";
    }
  };

  return (
    <>
        <StyledButton
          variant="contained"
          startIcon={renderIcon()}
          onClick={onClick}
        >
          {renderLabel()}
        </StyledButton>
    
    </>
  );
};

export default SortButton;
