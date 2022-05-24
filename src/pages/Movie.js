import React from "react";
import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import { makeStyles } from "@mui/styles";


import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    },
    content: {
    display: "flex",
    alignItems: "baseline",

}
  }));
const Movie = () => {
  const { id } = useParams();
  const { loading, error, data } = useMovie(id);
  const classes = useStyles();

  console.log({ data });

  if(loading) return <p>loading</p>
  if(error) return <p>something went wrong</p>
  return (
    <div className={classes.container}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.film.title}
          </Typography>
          <div className={classes.content}>
           <h3>Director:</h3>     
          <Typography variant="body2" color="text.secondary">
            {data.film.director}
          </Typography>
          </div>
          <div className={classes.content}>
            <h3 style={{margin: "0 10px 10px 0"}}>Producers:</h3>
            {data.film.producers.map((item, index) => {
              return <Typography key={index}>{item} ,</Typography>;
            })}
          </div>
          <Typography variant="body2" color="text.secondary">
            {data.film.created}
          </Typography>
     
        </CardContent>
      </Card>
    </div>
  );
};

export default Movie;
