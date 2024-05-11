import React from "react"; // replace existing react import
import TemplateActorPage from "../components/templateActorPage";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { ActorDetails } from "../types/interfaces";
import { getActorDetails } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const ActorDetailsPage: React.FC = () => {

    const { id } = useParams();
    const { data: actor, error, isLoading, isError } = useQuery<ActorDetails, Error>(
        ["actor", id],
        ()=> getActorDetails(id||"")
      
    );


    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{(error

        ).message}</h1>;
    }

    if (!actor) {
        return <h1>Actor not found</h1>;
    }


  return (
    <>
    <TemplateActorPage actor = {actor}></TemplateActorPage>
    </>
  )
    
};

export default ActorDetailsPage;