import React from 'react';
import { Button, withStyles } from '@material-ui/core';

const StyledButton = withStyles({
    root: {
        color: 'Green',
        display: 'flex'
    }
})(Button);


export default function IconButton(props) {

    return (
        <div>
            <StyledButton l={10}>{props.value} 
            <img src="" />
            </StyledButton>
        </div>
    );
}