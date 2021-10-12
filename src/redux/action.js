import axios from "axios";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./actionType";

export const request = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const success = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data,
  };
};

export const failure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const fetchData = (districtCode) => {
  return (dispatch) => {
    dispatch(request);
    axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${districtCode}&date=18-05-2021`
      )
      .then((res) => {
        const data = res.data.centers.filter((center) =>
          center.sessions.some((session) => session.available_capacity > 0)
        );

        dispatch(success(data));
      })
      .catch((error) => {
        const errorMsg = "Error in fetching API";
        dispatch(failure(errorMsg));
      });
  };
};
