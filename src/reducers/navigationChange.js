const defaultState = {
    color: "#48ad44",
    font: "Arial"
};

const navigationChange = (state = defaultState, action) => {
    switch (action.type) {
        case "CHANGE_COLOR":
            return {
                ...state,
                color: action.payload.color,
            };
        case "CHANGE_FONT":
            return {
                ...state,
                font: action.payload.font,
            };
        default:
            return state;
    }
}
export default navigationChange