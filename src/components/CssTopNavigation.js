import React from 'react';
import { Grid, withStyles, styled } from '@material-ui/core';
import CssButton from './CssButton';
import CssBigButton from './CssBigButton';
import { compose, spacing, palette } from '@material-ui/system';
import { connect } from "react-redux";
import { changeColor, changeFont } from "../actions";

const StyledGrid = withStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justify: 'center',
    }
})(Grid);

const Box = styled('div')(
    compose(
        spacing,
        palette,
    ),
);

function TopNavigation(props) {
    const pageName = props.value;
    return (
        <Box color="white" bgcolor={props.navigationChange.color}
            p={1}>
            <StyledGrid container spacing={8}>
                <StyledGrid item xs={2}>
                </StyledGrid>
                <StyledGrid item xs={1}>
                    <CssButton value="Home" />
                </StyledGrid>
                <StyledGrid item xs={1}>
                    <CssButton value="About" />
                </StyledGrid>
                <StyledGrid item xs={1}>
                    <CssButton value="News" />
                </StyledGrid>
                <StyledGrid item xs={2}>
                    <CssBigButton value={pageName} />
                </StyledGrid>
                <StyledGrid item xs={1}>
                    <CssButton value="Gallery" />
                </StyledGrid>
                <StyledGrid item xs={1}>
                    <CssButton value="Event" />
                </StyledGrid>
                <StyledGrid item xs={1}>
                    <CssButton value="Product" />
                </StyledGrid>
                <StyledGrid item xs={2}>
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