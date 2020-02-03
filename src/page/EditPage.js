import React from "react";
import "../App.css";
import { Grid, withStyles, styled } from "@material-ui/core";
import { compose, spacing, palette } from "@material-ui/system";
import CssSideEdit from "../components/CssSideEdit";
import CssTopEditBar from "../components/CssTopEditBar";
import MainPage from "../page/MainPage";
import NewsPage from "../page/NewsPage";
import {
  BrowserRouter,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

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

class EditPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Box color="white" justify="center" display="flex" p={1}>
            <StyledGrid container spacing={0}>
              <StyledGrid item xs={3} color="grey">
                <CssSideEdit />
              </StyledGrid>
              <StyledGrid item xs={9}>
                <div className="App">
                  <header className="App-header">
                    <div>
                      <CssTopEditBar />
                    </div>
                    <Switch>
                      <Route exact path="/" component={withRouter(MainPage)} />
                      <Route
                        exact
                        path="/news"
                        component={withRouter(NewsPage)}
                      />
                    </Switch>
                  </header>
                </div>
              </StyledGrid>
            </StyledGrid>
          </Box>
        </div>
      </BrowserRouter>
    );
  }
}

export default EditPage;
