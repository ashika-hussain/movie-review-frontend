import React from "react";
import { SeriesReview } from "../../types/interfaces";

const SeriesReviewPage: React.FC<SeriesReview> =  (props) => {
  return (
    <>
      <p>Review By: {props.author} </p>
      <p>{props.content} </p>
    </>
  );
};
export default SeriesReviewPage