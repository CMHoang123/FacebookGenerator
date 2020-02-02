import React from "react";
import { styled, Button } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import { compose, spacing, palette } from "@material-ui/system";
import { connect } from "react-redux";
import { changeColor, changeFont } from "../actions";

const Box = styled("div")(compose(spacing, palette));

function BottomNavigation(props) {
  return (
    <Box
      bgcolor={props.navigationChange.color}
      color="white"
      justify="center"
      display="flex"
      p={1}
    >
      <div>
        <p style={{ fontSize: 18, fontFamily: props.navigationChange.font }}> {props.value.phone} </p>
        <p style={{ fontSize: 18, fontFamily: props.navigationChange.font }}> {props.value.emails} </p>
        <Button color="inherit" href={props.value.link}>
          <FacebookIcon />
        </Button>
      </div>
    </Box>
  );
}

const mapStateToProps = state => ({
  navigationChange: state.navigationChange
});

const mapDispatchToProps = dispatch => ({
  changeColor: color => dispatch(changeColor(color)),
  changeFont: font => dispatch(changeFont(font))
});

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavigation);
