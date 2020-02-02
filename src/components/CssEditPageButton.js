import React from 'react';
import { Button, withStyles } from '@material-ui/core';

const StyledButton = withStyles({
    root: {
        color: 'white',
        display: 'flex', 
    }
})(Button);


export default function EditPageButton(props) {

    return (
        <div >
            <StyledButton l={10}>{props.value}</StyledButton>
        </div>
    );
}