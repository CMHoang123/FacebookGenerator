export function changeColor(color) {
    return dispatch => {
        dispatch({
            type: "CHANGE_COLOR",
            payload: {
                color
            }
        })
    }
}

export function changeFont(font) {
    return dispatch => {
        dispatch({
            type: "CHANGE_FONT",
            payload: {
                font
            }
        })
    }
}