import React from "react";
import { CardMedia, Card, CardContent, Typography } from "@material-ui/core";
import logo192 from "../asset/logo192.png";

export default function ImageCard(props) {
  const cardInfo = {
    photo_url: props.value.photo_url,
    name: props.value.name
  };

  return (
    <div>
      <ImageGrid value={cardInfo} />
    </div>
  );
}

function ImageGrid(props) {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="Image"
        height="370"
        width="170"
        image={props.value.photo_url}
        title="Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          {props.value.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
