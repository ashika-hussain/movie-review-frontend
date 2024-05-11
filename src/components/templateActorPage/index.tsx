import React from "react"; 
import Grid from "@mui/material/Grid";
import ImageListItem from "@mui/material/ImageListItem";
import { ActorDetails } from "../../types/interfaces";
import { Paper, Typography } from "@mui/material";

const styles = {
    gridListRoot: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    gridListTile: {
        width: 450,
        height: '100vh',
    },
    detailsContainer: {
        marginTop: 10,
    },
    paper: {
        padding: 10,
    },
};

interface TemplateActorPageProps {
    actor: ActorDetails;
}


const TemplateActorPage: React.FC <TemplateActorPageProps>= (props) => {

    const actor = props.actor
    return (
        <>

            <Grid container spacing={5} style={{ padding: "15px" }}>
                <Grid item xs={3}>
                    <div>
                                <ImageListItem
                                    key={actor.profile_path}
                                    sx={styles.gridListTile}
                                    cols={1}
                                >
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                                        alt={'Image alternative'}
                                    />
                                </ImageListItem>
                    </div>
                </Grid>
                <Grid item xs={9} sx={styles.detailsContainer}>
                <Paper sx={styles.paper}>
                        <Typography variant="h2">{actor.name}</Typography>
                        <Typography><strong>Date of Birth:</strong> {actor.birthday}</Typography>
                        {actor.deathday && <Typography><strong>Date of Death:</strong> {actor.deathday}</Typography>}
                        <Typography><strong>Place of Birth:</strong> {actor.place_of_birth}</Typography>
                        <Typography><strong>Also Known As:</strong> {actor.also_known_as.join(", ")}</Typography>
                        <Typography variant="h3">Biography</Typography>
                        <Typography>{actor.biography}</Typography>
                    </Paper>
                </Grid>

            </Grid>
        </>
    );
};

export default TemplateActorPage;