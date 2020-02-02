import React from "react";
import "./App.css";
import { Grid, withStyles, styled } from "@material-ui/core";
import { compose, spacing, palette } from "@material-ui/system";
import CssSideEdit from "./components/CssSideEdit";
import MainPage from "./page/MainPage";

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

class FBApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Box color="white" justify="center" display="flex" p={1}>
          <StyledGrid container spacing={0}>
            <StyledGrid item xs={3} color="grey">
              <CssSideEdit />
            </StyledGrid>
            <StyledGrid item xs={9}>
              <MainPage />
            </StyledGrid>
          </StyledGrid>
        </Box>
      </div>
    );
  }
}

export default FBApi;
