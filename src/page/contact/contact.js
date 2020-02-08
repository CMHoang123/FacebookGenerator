import React from "react";
import styles from "./contact.module.css";
import { Grid, Box, TextField, Button } from "@material-ui/core";
import CssGoogleMap from "../../components/google_map";

export default class ContactPage extends React.Component {
  render() {
    return (
      <Box>
        <Grid container spacing={1} className={styles.contact_bar}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <h1 className={styles.contact_title}>Contact</h1>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <div>
                  <div>
                    <h3 className={styles.contact_text}>Phone</h3>
                    <h6 className={styles.contact_small_text}>007419552</h6>
                  </div>
                  <div>
                    <h3 className={styles.contact_text}>Location</h3>
                    <h6 className={styles.contact_small_text}>
                      689/7/10 Hương Lộ 2, TPHCM
                    </h6>
                  </div>
                </div>
              </Grid>
              <Grid item xs={3}>
                <h3 className={styles.contact_text}>Message</h3>
                <div>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Name"
                    placeholder="Name"
                  />
                </div>
                <br />
                <div>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Email"
                    placeholder="Email"
                  />
                </div>
                <br />
                <div>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Phone"
                    placeholder="Phone"
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <h3 className={styles.contact_text}>Send Message</h3>
                </div>
                <div>
                  <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows="9"
                    rowsMax="9"
                    placeholder="Message"
                    variant="outlined"
                    className={styles.contact_message_input}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid container spacing={10} className={styles.contact_button_grid}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Button
              variant="outlined"
              className={styles.contact_button_info}
              color="primary"
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={10} className={styles.contact_google_map}>
          <Grid item xs={12}>
            <CssGoogleMap
              value={{
                latitude: 10.89531,
                longitude: 106.676901
              }}
            />
          </Grid>
        </Grid>
      </Box>
    );
  }
}
