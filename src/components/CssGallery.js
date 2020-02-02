import React from 'react';
import { Grid, withStyles, styled,  } from '@material-ui/core';
import CssEventCard from './CssEventCard';
import { compose, spacing, palette } from '@material-ui/system';


const StyledGrid = withStyles({
    root: {
        display: 'flex',
        direction: 'column',
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

export default function CssGallery(props) {
    return (
        <Box color="white" justify="center" display="flex" p={0}>
            <StyledGrid container>
                <StyledGrid item xs={3}>
                    <CssEventCard value={props.value} />
                </StyledGrid>
                <StyledGrid item xs={3}>
                    <CssEventCard value={props.value} />
                </StyledGrid>
                <StyledGrid item xs={3}>
                    <CssEventCard value={props.value} />
                </StyledGrid>
                <StyledGrid item xs={3}>
                    <CssEventCard value={props.value} />
                </StyledGrid>
            </StyledGrid>
        </Box>
    );
}
