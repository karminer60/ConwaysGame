const initialState = {
  user: {
    id: "",
    username: "",
    first_name: "",
    last_name: "",
    email: "",
  },
  loading: false,
  error: "",
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}