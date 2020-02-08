import React from "react";
import {
  CardMedia,
  Card,
  CardContent,
  Typography,
  CardActions,
  Grid,
  CardActionArea
} from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

const cards = [
  {
    imageUrl: "https://i.ibb.co/gVpcW78/pv-featured-images.jpg",
    date: "24/2/2020",
    name: "Piano Concert 24/2"
  },
  {
    imageUrl:
      "https://i.ibb.co/MGZhP6j/piano-music-hdmi-sound-recording-and-reproduction-piano.jpg",
    date: "25/3/2020",
    name: "Piano Concert 25/3"
  },
  {
    imageUrl: "https://i.ibb.co/0qXLK9v/transparent-piano.jpg",
    date: "16/4/2020",
    name: "Piano Concert 16/4"
  },
  {
    imageUrl: "https://i.ibb.co/KDkDJyk/piano-icon-30.jpg",
    date: "15/6/2020",
    name: "Piano Concert 15/6"
  }
];

function MyCard(props) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia className={styles.news_img} image={props.imageUrl} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            className={styles.new_text}
          >
            {props.name}
          </Typography>
          <Typography variant="body2" className={styles.new_text}>
            {props.date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={styles.news_grid}>
        <Link to="/Home" className={styles.news_link}>
          Read More
        </Link>
      </CardActions>
    </Card>
  );
}

export default class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards
    };
  }

  render() {
    return (
      <Grid container spacing={2}>
        {this.state.cards.map((card, index) => (
          <Grid item xs={3} container>
            <MyCard
              imageUrl={card.imageUrl}
              date={card.date}
              name={card.name}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}
