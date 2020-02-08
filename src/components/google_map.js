import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { Grid, withStyles, styled } from "@material-ui/core";
import { compose, spacing, palette } from "@material-ui/system";

const Box = styled("div")(compose(spacing, palette));

const StyledGrid = withStyles({
  root: {
    paddingLeft: "5%"
  }
})(Grid);

export default function CssAbout(props) {
  const latitude = props.value.latitude;
  const longitude = props.value.longitude;
  const MyMapComponent = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{
          lat: 10.895310,
          lng: 106.676901
        }}
      >
        {props.isMarkerShown && (
          <Marker
            position={{
              lat: latitude,
              lng: longitude
            }}
          />
        )}
      </GoogleMap>
    ))
  );

  return (
    <div>
      <Box color="black" p={1}>
        <StyledGrid container spacing={10}>
          <StyledGrid item xs={3}></StyledGrid>
          <StyledGrid item xs={5}>
            <MyMapComponent
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </StyledGrid>
        </StyledGrid>
      </Box>
    </div>
  );
}
