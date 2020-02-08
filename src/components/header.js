import React, { Component } from "react";
import styles from "./index.module.css";
import { Grid, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Box className={styles.header_box} bgcolor="palette.text.primary" p={1}>
        <Grid className={styles.header_grid} container spacing={8} >
          <Grid item xs={2}></Grid>
          <Grid item xs={1}>
            <Link className={styles.links} to="/Home">
              Home
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Link className={styles.links} to="/About">
              About
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Link className={styles.links} to="/News">
              News
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link className={styles.center_link} to="/Home">
              Pianissimo
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Link className={styles.links} to="/Gallery">
              Gallery
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Link className={styles.links} to="/Event">
              Event
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Link className={styles.links} to="/Contact">
            Contact
            </Link>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Box>
    );
  }
}

export default Header;
