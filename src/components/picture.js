import React from "react";
import {
  CardMedia,
  Card,
  CardContent,
  Button,
  Typography,
  CardActions,
  Grid,
  CardActionArea,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

const cards = [
  {
    imageUrl: "https://i.ibb.co/gVpcW78/pv-featured-images.jpg",
    name: "Cover"
  },
  {
    imageUrl:
      "https://i.ibb.co/MGZhP6j/piano-music-hdmi-sound-recording-and-reproduction-piano.jpg",
    name: "Background"
  },
];

function MyCard(props) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia className={styles.news_img} image={props.imageUrl} />
        <CardContent>
        <Typography gutterBottom variant="body1" color="grey" className={styles.new_text}>
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
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
          <Grid item xs={3}>
            <MyCard
              imageUrl={card.imageUrl}
              name={card.name}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}
