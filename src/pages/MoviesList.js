import React, { useState } from "react";
import useMovies from "../hooks/useMovies";

import {
  CardActionArea,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },

  desc: {
    display: "flex",
    alignItems: "baseline",
  },

  span: {
    display: "inline-block",
    paddingLeft: "5px",
  },
}));

const MoviesList = () => {
  const [visible, setVisible] = useState(3);
  const { loading, error, data } = useMovies();
  const classes = useStyles();
  console.log(data);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  if (loading) return <p>loading...</p>;
  if (error) return <p>something went wrong</p>;

  return (
    <div className={classes.container}>
      {data.allFilms.films.slice(0, visible).map((item) => {
        return (
          <div className={classes.container} key={item.id}>
            <Card sx={{ width: 345, margin: 1 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <Link to={`/${item.id}`}>{item.title}</Link>
                  </Typography>
                  <div className={classes.desc}>
                    <Typography>Director:</Typography>
                    <Typography
                      variant="body"
                      color="text.secondary"
                      className={classes.span}
                    >
                      {item.director}
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        );
      })}
      {visible < data.allFilms.films.length ? (
        <Button size="medium" variant="contained" onClick={showMoreItems}>
          more
        </Button>
      ) : null}
    </div>
  );
};

export default MoviesList;
