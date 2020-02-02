import React from "react";
import { Grid, withStyles, styled } from "@material-ui/core";
import { compose, spacing, palette } from "@material-ui/system";
import ReactSymbol from "../asset/ReactSymbol.png";
import { connect } from "react-redux";
import { changeColor, changeFont } from "../actions";

const Box = styled("div")(compose(spacing, palette));

const StyledGrid = withStyles({
  root: {
  }
})(Grid);

function BottomBar(props) {
  return (
    <Box color="white" p={1} bgcolor={props.navigationChange.color}>
      <StyledGrid container spacing={6}>
        <StyledGrid item xs={3}>
          <div>
            <p style={{ fontSize: 14, fontFamily: props.navigationChange.font }}> @ {props.value} </p>
          </div>
        </StyledGrid>
        <StyledGrid item xs={6}></StyledGrid>
        <StyledGrid item xs={3}>
        <div>
            <p style={{ fontSize: 16, fontFamily: props.navigationChange.font }}> POWERED BY &nbsp;&nbsp;
                <img src={ReactSymbol} width="20px" height="20px" alt="Picture" />
             </p>
          </div>
        </StyledGrid>
      </StyledGrid>
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

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar);