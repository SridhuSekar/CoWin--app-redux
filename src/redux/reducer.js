import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./actionType";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { loading: true, data: [] };

      break;
    case FETCH_USER_SUCCESS:
      return { loading: false, data: action.payload };
      break;

    case FETCH_USER_FAILURE:
      return { loading: false, error: action.payload };
      break;
    default:
      return state;
      break;
  }
};

export default reducer;
