import React from "react";
import { Button, withStyles, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { changeColor, changeFont } from "../actions";

const StyledButton = withStyles(props => ({
  root: {
    color: "white",
    display: "flex"
  }
}))(Button);

const useStyles = makeStyles({
  root: {
    fontFamily: props => props.navigationChange.font,
  },
});

function SmallButton(props) {
  const classes = useStyles(props); 
  return (
    <div>
      <StyledButton l={10} className={classes.root}>{props.value}</StyledButton>
    </div>
  );
}

const mapStateToProps = state => ({
  navigationChange: state.navigationChange
});

const mapDispatchToProps = dispatch => ({
  changeColor: color => dispatch(changeColor(color)),
  changeFont: font => dispatch(changeFont(font))
});

export default connect(mapStateToProps, mapDispatchToProps)(SmallButton);
