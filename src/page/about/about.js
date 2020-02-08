import React from "react";
import styles from "./about.module.css";
import { Box, Grid, Divider } from "@material-ui/core";

export default class AboutPage extends React.Component {
  render() {
    return (
      <Box>
        <Grid container spacing={1} className={styles.about_bar}>
          <Grid item xs={1}></Grid>
          <Grid item xs={6}>
            <h1 className={styles.about_title}>About</h1>
            <p className={styles.about_text}>Welcome to our website!</p>
            <p className={styles.about_text}>
              Take a look around and feel free to contact us for more
              information.
            </p>
          </Grid>
          <Grid item xs={5}></Grid>
        </Grid>
        <Divider />
      </Box>
    );
  }
}
