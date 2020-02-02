import React from 'react';
import { Button,withStyles } from '@material-ui/core';

const StyledButton = withStyles({
    root: {
        color: 'white',
        margin: 'auto',
        fontSize: 20
    }
})(Button);

export default function BigButton(props) {

    return (
        <div >
            <StyledButton>{props.value}</StyledButton>
        </div>
    );
}