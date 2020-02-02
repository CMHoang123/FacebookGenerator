import React from "react";
import { Grid, withStyles, styled, Fab } from "@material-ui/core";
import CssEditPageButton from "./CssEditPageButton";
import { compose, spacing, palette } from "@material-ui/system";
import { connect } from "react-redux";
import { changeColor, changeFont } from "../actions";
import SyncIcon from '@material-ui/icons/Sync';

const StyledGrid = withStyles({
  root: {
    display: "flex",
    direction: "column",
    alignItems: "center",
    alignContent: "center",
    justify: "center"
  }
})(Grid);

const Box = styled("div")(compose(spacing, palette));

function syncState() {
  
}

function TopNavigation(props) {
  return (
    <Box
      color="white"
      bgcolor="text.secondary"
      justify="center"
      display="flex"
      p={1}
    >
      <StyledGrid container spacing={3}>
        <StyledGrid item xs={1}>
          <CssEditPageButton value="Design" />
        </StyledGrid>
        <StyledGrid item xs={1}>
          <CssEditPageButton value="Page" />
        </StyledGrid>
        <StyledGrid item xs={1}>
          <CssEditPageButton value="Setting" />
        </StyledGrid>
        <StyledGrid item xs={1}>
          <CssEditPageButton value="Help" />
        </StyledGrid>
        <StyledGrid item xs={2}></StyledGrid>
        <StyledGrid item xs={1}></StyledGrid>
        <StyledGrid item xs={1}></StyledGrid>
        <StyledGrid item xs={2}>
          <CssEditPageButton value="Visit Website" />
        </StyledGrid>
        <StyledGrid item xs={2}>
          <Fab variant="extended" onClick={syncState()}>
            <SyncIcon />
            Sync
          </Fab>
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

export default connect(mapStateToProps, mapDispatchToProps)(TopNavigation);