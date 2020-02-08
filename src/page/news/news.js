import React from "react";
import styles from "./news.module.css";
import { Box, Grid, Divider } from "@material-ui/core";
import New from "../../components/new.js";

export default class AboutPage extends React.Component {
  render() {
    return (
      <Box>
        <Grid container spacing={1} className={styles.news_bar}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <New />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Divider />
      </Box>
    );
  }
}
