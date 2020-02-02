import React from 'react';
import { Grid, withStyles, styled } from '@material-ui/core';
import { compose, spacing, palette } from '@material-ui/system';

const StyledGrid = withStyles({
    root: {
        paddingLeft: "5%"
    }
})(Grid);

const Box = styled('div')(
    compose(
        spacing,
        palette,
    ),
);

export default function CssAbout(props) {
    return (
        <Box color="black" justify="center" display="flex" p={1} >
            <StyledGrid container spacing={5}>
                <StyledGrid item xs={4}>
                    <div>
                        <img src={props.value.photoLink} width="250px" height="250px" />
                    </div>
                </StyledGrid>
                <StyledGrid item xs={6}>
                    <div>
                        <p>
                        {props.value.about} 
                        </p>
                    </div>
                </StyledGrid>
            </StyledGrid>
        </Box>
    );
}