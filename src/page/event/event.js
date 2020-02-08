import React from "react";
import styles from "./event.module.css";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Divider, Grid, Typography, Box } from "@material-ui/core";

const imgUrl = [
  "https://i.ibb.co/gVpcW78/pv-featured-images.jpg",
  "https://i.ibb.co/MGZhP6j/piano-music-hdmi-sound-recording-and-reproduction-piano.jpg"
];

export default class EventPage extends React.Component {
  render() {
    return (
      <Box>
        <Grid container spacing={1} className={styles.event_bar}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <h1 className={styles.event_title}>Event</h1>
            <Grid
              item
              sm={3}
              xs={3}
              container
              justify="center"
              className={styles.event_body}
            >
              <Grid item sm={12} container>
                <Grid item sm={3}>
                  <div className={styles.image_page}>
                    <img alt="" src={imgUrl[1]} className={styles.img_style} />
                  </div>
                </Grid>
                <Grid item sm={9} container direction="column">
                  <Grid>
                    <Typography variant="h6" className={styles.page_name}>
                      Pianissimo
                    </Typography>
                  </Grid>
                  <Grid>
                    <Button className={styles.btn_like}>
                      <FontAwesomeIcon
                        icon={faFacebookSquare}
                        className={styles.icon}
                        size='1x'
                      ></FontAwesomeIcon>
                      <Typography className={styles.like}>Like Page</Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container sm={12} className={styles.contain_event}>
                <Grid className={styles.event}>
                  <Typography className={styles.event_content}>
                    Foody does not have any upcoming events.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container sm={3} justify="center" className={styles.event_message_button_grid}>
              <Button
                variant="outlined"
                className={styles.event_button_info}
                color="primary"
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
      </Box>
    );
  }
}
