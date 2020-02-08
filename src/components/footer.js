import React, { Component } from "react";
import styles from "./index.module.css";
import { Grid, Box } from "@material-ui/core";
import ReactSymbol from "../asset/ReactSymbol.png";

class Footer extends Component {
  render() {
    return (
      <Box className={styles.footer_box} p={1}>
        <Grid className={styles.footer_grid} container spacing={6}>
          <Grid item xs={2}>
            <div>
              <p className={styles.footer_text_left}>@Pianissimo</p>
            </div>
          </Grid>
          <Grid item xs={8}></Grid>
          <Grid item xs={2}>
          <p className={styles.footer_text_right}> POWERED BY &nbsp;&nbsp;
                <img src={ReactSymbol} width="20px" height="20px" alt="Picture" />
             </p>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default Footer;
