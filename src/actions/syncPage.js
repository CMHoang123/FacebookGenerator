export function syncUserInfo(userInfo) {
    return dispatch => {
        dispatch({
            type: "SYNC_USER_INFO",
            payload: {
                userInfo
            }
        })
    }
}

export function syncPageInfo(pageInfo) {
    return dispatch => {
        dispatch({
            type: "SYNC_PAGE_INFO",
            payload: {
                pageInfo
            }
        })
    }
}

export function syncOtherPageInfo(otherPageInfo) {
    return dispatch => {
        dispatch({
            type: "SYNC_OTHER_PAGE_INFO",
            payload: {
                otherPageInfo
            }
        })
    }
}