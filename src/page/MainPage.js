import React from "react";
import { connect } from "react-redux";
import {
  changeColor,
  changeFont,
  syncUserInfo,
  syncPageInfo,
  syncOtherPageInfo
} from "../actions";
import CssImageGrid from "../components/CssImageGrid";
import CssTopNavigation from "../components/CssTopNavigation";
import CssBottomNavigation from "../components/CssBottomNavigation";
import CssNews from "../components/CssNews";
import CssGallery from "../components/CssGallery";
import CssAbout from "../components/CssAbout";
import CssContact from "../components/CssContact";
import FB from "fb";
import CssTopEditBar from "../components/CssTopEditBar";
import { Grid, withStyles, styled } from "@material-ui/core";
import { compose, spacing, palette } from "@material-ui/system";
import CssGoogleMap from "../components/CssGoogleMap";
import CssBottomBar from "../components/CssBottomBar";
import CssEventList from "../components/CssEventList";
import NewsPage from "../page/NewsPage";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

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
    this.state = {
      apiPageResult: {},
      apiPageInfoResult: {},
      apiUserResult: {},
      contactInfo: {
        phone: "",
        location: "",
        emails: "",
        latitude: "",
        longitude: ""
      },
      pageName: "",
      photoLink: "",
      logoLink: "",
      phoneNumber: "",
      eventsInfo: "",
      eventsList: []
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <div>
              <div>
                <CssTopEditBar />
              </div>
              <Switch>
                <Route exact path="/">
                  <div>
                    <div>
                      <CssTopNavigation value={this.state.pageName} />
                    </div>
                    <div>
                      <CssImageGrid value={this.state.apiPageResult} />
                    </div>
                    <div>
                      {this.state.apiUserResult.email}
                      <CssBottomNavigation value={this.state.contactInfo} />
                    </div>
                    <div>
                      <h1
                        className="ColorText-h1"
                        style={{
                          color: this.props.navigationChange.color,
                          fontFamily: this.props.navigationChange.font,
                        }}
                      >
                        About
                      </h1>
                    </div>
                    <div>
                      <CssAbout
                        value={{
                          photoLink: this.state.photoLink,
                          about: this.state.apiPageInfoResult.about
                        }}
                      />
                    </div>
                    <div>
                      <h1
                        className="ColorText-h1"
                        style={{
                          color: this.props.navigationChange.color,
                          fontFamily: this.props.navigationChange.font,
                        }}
                      >
                        News
                      </h1>
                    </div>
                    <div>
                      <CssNews value={this.state.logoLink} />
                    </div>
                    <div>
                      <h1
                        className="ColorText-h1"
                        style={{
                          color: this.props.navigationChange.color,
                          fontFamily: this.props.navigationChange.font,
                        }}
                      >
                        Gallery
                      </h1>
                    </div>
                    <div>
                      <CssGallery value={this.state.logoLink} />
                    </div>
                    <div>
                      <h1
                        className="ColorText-h1"
                        style={{
                          color: this.props.navigationChange.color,
                          fontFamily: this.props.navigationChange.font,
                        }}
                      >
                        Events
                      </h1>
                    </div>
                    <div>
                      <CssEventList value={{
                        eventList: this.state.eventsList,
                        logoLink: this.state.logoLink,
                        pageName: this.state.pageName
                        }} />
                    </div>
                    <div>
                      <h1
                        className="ColorText-h1"
                        style={{
                          color: this.props.navigationChange.color,
                          fontFamily: this.props.navigationChange.font,
                        }}
                      >
                        Contact
                      </h1>
                    </div>
                    <div>
                      <CssContact value={this.state.contactInfo} />
                    </div>
                    <div>
                      <CssGoogleMap value={this.state.contactInfo} />
                    </div>
                    <div>
                      <CssBottomBar value={this.state.pageName} />
                    </div>
                  </div>
                </Route>
                <Route path="/news">
                  <NewsPage value={this.state.photoLink} />
                </Route>
              </Switch>
            </div>
          </header>
        </div>
      </BrowserRouter>
    );
  }

  componentDidMount() {
    this.searchPageInfo();
    this.searchPageOtherInfo();
    this.searchUserInfo();
    return;
  }

  searchUserInfo() {
    FB.api(
      "/100046640854953",
      "GET",
      {
        fields: "id,name,email",
        access_token:
          "EAAMIaToJEsABALMdyT1q60uoJaTigiRwvE85S3zkZC67cRQ2GafFL7TqmQQfAylS6g3hT4G3g2w3gqeO3OWK1RpasT73MxHca1GwLX6oRzadFGQbTrLb2Di8Y8CrsDkZCF4DmW3QaUFhSww8VfDfGzhrTM0hAALYfHEg08GfU8gLBmgrRVXVxndgKHZBADKIKq1UeeOSwZDZD"
      },
      response => {
        this.setState({ apiUserResult: response });
        this.props.syncUserInfo(response);
      }
    );
  }

  searchPageInfo() {
    FB.api(
      "/853672968393408",
      "GET",
      {
        fields: "id,name,category,link,subcategory,photo_url,logo_url",
        access_token:
          "EAAMIaToJEsABALMdyT1q60uoJaTigiRwvE85S3zkZC67cRQ2GafFL7TqmQQfAylS6g3hT4G3g2w3gqeO3OWK1RpasT73MxHca1GwLX6oRzadFGQbTrLb2Di8Y8CrsDkZCF4DmW3QaUFhSww8VfDfGzhrTM0hAALYfHEg08GfU8gLBmgrRVXVxndgKHZBADKIKq1UeeOSwZDZD"
      },
      response => {
        this.setState({
          apiPageResult: response,
          pageName: response.name,
          photoLink: response.photo_url,
          logoLink: response.logo_url
        });
        this.props.syncPageInfo(response);
      }
    );
  }

  searchPageOtherInfo() {
    FB.api(
      "/109919550538707",
      "GET",
      {
        fields: "id,events,phone,location,emails,link,about",
        access_token:
          "EAAMIaToJEsABAKQYploymUsZBfZA73ShPlxQ3OR9KFye1ZCbJbZAI7NEfnAtAJGy3ca14bcb1SZBLDCyfQsJdHr6xZCu4UcLZAWVLFcQJUWHVOjaZBHjUmhkAZBKMAhRlT5ZCvPdWgfjV6gW0Opwud0g6EGZBMbWWrZBYK50TNRZAJufAzQqIBelj9WTJQtkCSXy3J4AZD"
      },
      response => {
        const emailInfo = response === null ? "" : response.emails[0];
        this.setState({
          apiPageInfoResult: response,
          phoneNumber: response.phone.replace("+84", "0"),
          eventsInfo: response.events.data[0].description,
          eventsList: response.events.data,
          contactInfo: {
            phone: response.phone.replace("+84", "0"),
            location: response.location.street,
            latitude: response.location.latitude,
            longitude: response.location.longitude,
            emails: emailInfo,
            link: response.link
          }
        });
        this.props.syncOtherPageInfo(response);
      }
    );
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(FBApi);
