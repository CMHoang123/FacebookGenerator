import React from "react";
import styles from "./gallery.module.css";
import { Grid, Divider, Box } from "@material-ui/core";
import Picture from "../../components/picture";

export default class GalleryPage extends React.Component {
  render() {
    return (
      <Box>
        <Grid container className={styles.gallery_bar} spacing={0}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <h1 className={styles.gallery_title}>Gallery</h1>
            <Picture />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Divider />
      </Box>
    );
  }
}
