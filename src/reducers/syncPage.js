const defaultState = {
  userInfo: {},
  pageInfo: {},
  otherPageInfo: {}
};

const syncPage = (state = defaultState, action) => {
  switch (action.type) {
    case "SYNC_USER_INFO":
      return {
        ...state,
        userInfo: action.payload.userInfo
      };
    case "SYNC_PAGE_INFO":
      return {
        ...state,
        pageInfo: action.payload.pageInfo
      };
    case "SYNC_OTHER_PAGE_INFO":
      return {
        ...state,
        otherPageInfo: action.payload.otherPageInfo
      };
    default:
      return state;
  }
};
export default syncPage;
