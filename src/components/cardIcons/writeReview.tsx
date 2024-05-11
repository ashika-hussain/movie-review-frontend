import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import {ListedMovie, ListedSeries} from "../../types/interfaces";
import { Link } from "react-router-dom";


type MediaType = ListedMovie | ListedSeries;

const WriteReviewIcon:React.FC<MediaType & { isSeries: boolean }> = (item,isSeries) => {
  return (
    <Link
    to={isSeries ? "/series/reviews/form" : "/reviews/form"}
    state={{
        itemId: item.id
      }}
  >
    <RateReviewIcon color="primary" fontSize="large" />
  </Link>
  );
};

export default  WriteReviewIcon;