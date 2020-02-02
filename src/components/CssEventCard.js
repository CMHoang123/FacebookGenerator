import React from "react";
import {
  CardMedia,
  Card,
  CardContent,
  Button,
  Typography,
  CardActions,
  makeStyles
} from "@material-ui/core";
import { BrowserRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  changeColor,
  changeFont,
  syncUserInfo,
  syncPageInfo,
  syncOtherPageInfo
} from "../actions";

const useStyles = makeStyles({
  card: {
    maxWidth: 250,
    paddingLeft: "15%"
  },
  media: {
    paddingTop: "20%",
    paddingRight: "30%",
    height: 250
  },
  content: {
    paddingLeft: "10%"
  },
  action: {
    paddingLeft: "32%"
  },
  title: {
    color: "green"
  },
  text: {
    color: "black"
  },
  linkCss: {
    color: "orange",
    textDecoration: 'none'
  }
});

function EventCard(props) {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          component="img"
          alt="event"
          image={props.value}
          title="event"
        />
        <CardContent className={classes.content}>
          <Typography
            gutterBottom
            variant="h5"
            component="h3"
            className={classes.title}
            style={{
              color: props.navigationChange.color,
              fontFamily: props.navigationChange.font,
            }}
          >
            Event 1
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.text}
            style={{ fontSize: 14 }}
          >
            Welcome to our website! Take a look around and feel free to contact
            us for more information.
          </Typography>
        </CardContent>
        <CardActions className={classes.action}>
          <Button size="small" color="secondary">
            <Link to="/news" className={classes.linkCss}>
              Learn More
            </Link>
          </Button>
        </CardActions>
      </Card>
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({
  navigationChange: state.navigationChange,
  syncPage: state.syncPage
});

const mapDispatchToProps = dispatch => ({
  changeColor: color => dispatch(changeColor(color)),
  changeFont: font => dispatch(changeFont(font)),
  syncUserInfo: userInfo => dispatch(syncUserInfo(userInfo)),
  syncPageInfo: pageInfo => dispatch(syncPageInfo(pageInfo)),
  syncOtherPageInfo: otherPageInfo => dispatch(syncOtherPageInfo(otherPageInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventCard);
