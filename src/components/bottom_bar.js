import React, { Component } from "react";
import styles from "./index.module.css";
import { Grid, Box, Button, Divider } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";

class BottomBar extends Component {
  render() {
    return (
      <Box className={styles.bottom_bar_box}>
        <Grid className={styles.bottom_bar_grid} container spacing={1}>
          <Grid item xs={3}></Grid>
          <Grid
            spacing={0}
            xs={6}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={4}>
              <div>
                <p className={styles.bottom_bar_text}>0907419552</p>
                <p className={styles.bottom_bar_text}>
                  689/7/10 Hương Lộ 2, TPHCM
                </p>
              </div>
            </Grid>
            <Grid item xs={1}>
              <p className={styles.bottom_bar_divider}>|</p>
            </Grid>
            <Grid item xs={1}>
              <FacebookIcon className={styles.bottom_bar_button} />
            </Grid>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
        <Divider />
      </Box>
    );
  }
}

export default BottomBar;
