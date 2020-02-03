import React from "react";
import {
  Grid,
  withStyles,
  makeStyles,
  styled,
  Button
} from "@material-ui/core";
import { compose, spacing, palette } from "@material-ui/system";
import { connect } from "react-redux";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import {
  changeColor,
  changeFont,
  syncUserInfo,
  syncPageInfo,
  syncOtherPageInfo
} from "../actions";
import { BrowserRouter, Link } from "react-router-dom";

const StyledGrid = withStyles({
  root: {
    display: "flex",
    direction: "row",
    alignItems: "center",
    alignContent: "center",
    justify: "space-between"
  }
})(Grid);

const Box = styled("div")(compose(spacing, palette));

const useStyles = makeStyles({
  buttonInfo: {
    color: "green",
    width: "100%",
    maxWidth: 250,
    height: "60px",
    justifyContent: "center",
    display: "flex",
    marginTop: "2%",
    marginLeft: "35%",
    "&:hover": {
      backgroundColor: "#93ff80"
    }
  },
  linkCss: {
    color: "orange",
    textDecoration: "none"
  },
  divCss: {
    marginTop: "0px",
    paddingBottom: "527%",
    width: "125%"
  }
});

function NewsPage(props) {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.divCss}>
        <Box
          color="#474747"
          bgcolor="#d4d4d4"
          justify="center"
          display="flex"
          p={1}
        >
          <StyledGrid container spacing={10}>
            <StyledGrid item xs={1}></StyledGrid>
            <StyledGrid item xs={2}>
              <h4 style={{ color: "green" }}>News</h4>
            </StyledGrid>
            <StyledGrid item xs={3}>
              <Button style={{ color: "#474747" }}>
                <EmailIcon />
              </Button>
              <Button style={{ color: "#474747" }}>
                <FacebookIcon />
              </Button>
              <Button style={{ color: "#474747" }}>
                <TwitterIcon />
              </Button>
            </StyledGrid>
            <StyledGrid item xs={1}></StyledGrid>
            <StyledGrid item xs={3}>
              <Button style={{ fontSize: "11px" }}>
                <Link className={classes.linkCss} to="/">
                  Back to News
                </Link>
              </Button>
            </StyledGrid>
          </StyledGrid>
        </Box>
        <Box color="#696969" justify="center" display="flex" p={1}>
          <StyledGrid container spacing={8}>
            <StyledGrid item xs={1}></StyledGrid>
            <StyledGrid item xs={4}>
              Jan 29, 2020 &nbsp; <CalendarTodayIcon />
            </StyledGrid>
            <StyledGrid item xs={5}>
              <div>
                <img src={props.value} />
              </div>
            </StyledGrid>
          </StyledGrid>
        </Box>
        <div>
          <h5 style={{ color: "green" }}>Description</h5>
          <p style={{ color: "#474747", fontSize: "15px" }}>Pianissimo</p>
          <br />
        </div>
        <div>
          <Button
            variant="outlined"
            className={classes.buttonInfo}
            href="http://facebook.com/109919550538707/events"
          >
            Views on Facebook
          </Button>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
