import React from "react";
import {
  List,
  ListItemText,
  makeStyles,
  ListItem,
  ListItemAvatar,
  Avatar,
  Divider,
  Button,
  Typography
} from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";
import FacebookIcon from "@material-ui/icons/Facebook";
import moment from "moment";
import { connect } from "react-redux";
import {
  changeColor,
  changeFont,
  syncUserInfo,
  syncPageInfo,
  syncOtherPageInfo
} from "../actions";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: theme.palette.action.disabledBackground,
    color: "black",
    marginLeft: "5%"
  },
  subheaderFont: {
    fontSize: "20px",
    color: theme.palette.primary.dark,
    justifyContent: "center",
    display: "flex",
    backgroundColor: "#9e9e9e"
  },
  buttonInfo: {
    color: "green",
    width: "100%",
    maxWidth: 300,
    height: "60px",
    justifyContent: "center",
    display: "flex",
    marginTop: "2%",
    marginLeft: "15%"
  }
}));

function eventTime(eventList) {
  const result = [];
  if (eventList == null) {
    return;
  }
  for (let value of Object.entries(eventList)) {
    const event = eventList[value];
    console.log("Time: " + JSON.stringify(event));
    console.log("e");
  }
}

function EventList(props) {
  const classes = useStyles();
  eventTime(props.value.eventList);
  return (
    <div>
      <div>
        <List
          className={classes.root}
          subheader={
            <ListItem className={classes.subheaderFont}>
              <b>{props.value.pageName}</b>
            </ListItem>
          }
        >
          <ListItem className={classes.subheaderFont}>
            <Button size="small" color="primary">
              <FacebookIcon />
              Like Page
            </Button>
          </ListItem>
          <Divider />
          <ListItem className={classes.subheaderFont}>
            <img src={props.value.logoLink} width="150px" height="150px" />
          </ListItem>
          {props.value.eventList.map(event => {
            return (
              <div>
                <Divider />
                <ListItem button>
                  {/* <ListItemAvatar>
                    <Avatar></Avatar>
                  </ListItemAvatar> */}
                  <ListItemText
                    primary={event.name}
                    secondary={
                      <div
                        style={{
                          fontFamily: props.navigationChange.font
                        }}
                      >
                        <Typography>
                          Location: {event.place.location.city},
                          {event.place.location.country}
                        </Typography>
                        <Typography>
                          Start time:
                          {event.start_time === "" ? "None"
                            : moment(event.start_time).format(
                                "dddd, MMMM Do YYYY, h:mm a"
                              )}
                        </Typography>
                        <Typography>
                          End time:
                          {event.end_time === "" ? "None"
                            : moment(event.end_time).format(
                                "dddd, MMMM Do YYYY, h:mm a"
                              )}
                        </Typography>
                      </div>
                    }
                  />
                </ListItem>
              </div>
            );
          })}
        </List>
      </div>
      <div>
        <Button
          variant="outlined"
          className={classes.buttonInfo}
          href="http://facebook.com/109919550538707/events"
          style={{
            color: props.navigationChange.color,
            fontFamily: props.navigationChange.font
          }}
        >
          Views Event on Facebook
        </Button>
      </div>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
