import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import {ListedMovie, ListedSeries} from "../../types/interfaces";
import { Link } from "react-router-dom";


type MediaType = ListedMovie | ListedSeries;

const WriteReviewIcon:React.FC<MediaType & { isSeries: boolean }> = (item) => {
  return (
    <Link
    to={'/reviews/form'}
    state={{
        itemId: item.id,
        isSeries : item.isSeries
      }}
  >
    <RateReviewIcon color="primary" fontSize="large" />
  </Link>
  );
};

export default  WriteReviewIcon;