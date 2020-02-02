import React from "react";
import {
  Grid,
  withStyles,
  styled,
  TextField,
  makeStyles,
  Button
} from "@material-ui/core";
import { compose, spacing, palette } from "@material-ui/system";
import ReCAPTCHA from "react-google-recaptcha";
import { connect } from "react-redux";
import {
  changeColor,
  changeFont,
  syncUserInfo,
  syncPageInfo,
  syncOtherPageInfo
} from "../actions";

const StyledGrid = withStyles({
  root: {
    paddingLeft: "5%"
  }
})(Grid);

const Box = styled("div")(compose(spacing, palette));

const useStyles = makeStyles(theme => ({
  text: {
    color: "green"
  },
  root: {
    width: "100%"
  },
  buttonInfo: {
    color: "green",
    width: "180px",
    height: "60px",
    
  }
}));

function onChange(value) {
  console.log("Captcha value:", value);
}

function CssAbout(props) {
  const classes = useStyles();

  return (
    <Box color="black" p={1}>
      <StyledGrid container spacing={10}>
        <StyledGrid item xs={3}>
          <div>
            <div>
              <h3
                className={classes.text}
                style={{
                  color: props.navigationChange.color,
                  fontFamily: props.navigationChange.font,
                }}
              >
                Phone
              </h3>
              <h6>{props.value.phone}</h6>
            </div>
            <div>
              <h3
                className={classes.text}
                style={{
                  color: props.navigationChange.color,
                  fontFamily: props.navigationChange.font,
                }}
              >
                Location
              </h3>
              <h6>{props.value.location}</h6>
            </div>
          </div>
        </StyledGrid>
        <StyledGrid item xs={3}>
          <h3 className={classes.text}
          style={{
            color: props.navigationChange.color,
            fontFamily: props.navigationChange.font,
          }}>Message</h3>
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
        </StyledGrid>
        <StyledGrid item xs={5}>
          <div>
            <h3
              className={classes.text}
              style={{
                color: props.navigationChange.color,
                fontFamily: props.navigationChange.font,
              }}
            >
              Send Message
            </h3>
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows="10"
              rowsMax="10"
              placeholder="Message"
              variant="outlined"
              className={classes.root}
            />
          </div>
        </StyledGrid>
      </StyledGrid>
      <StyledGrid container spacing={10}>
        <StyledGrid item xs={4}></StyledGrid>
        <StyledGrid item xs={5}>
          <Button variant="outlined" className={classes.buttonInfo}
          style={{
            color: props.navigationChange.color,
            fontFamily: props.navigationChange.font
          }}>
            Send Message
          </Button>
        </StyledGrid>
      </StyledGrid>
      {/* <StyledGrid container spacing={10}>
        <StyledGrid item xs={5}></StyledGrid>
        <StyledGrid item xs={4}>
          <ReCAPTCHA sitekey="6LeuJqoUAAAAAIkGXbJOtQodoEBlKM9XGEIdapGl" onChange={onChange} />
        </StyledGrid>
      </StyledGrid> */}
    </Box>
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

export default connect(mapStateToProps, mapDispatchToProps)(CssAbout);
