import axios from "axios";

import { tokenConfig } from "./auth";
import { createMessage, returnErrors } from "./messages";
import { GET_PREDICTIONS, DELETE_PREDICTION, ADD_PREDICTION } from "./types";

// Get Predictions
export const getPredictions = () => (dispatch, getState) => {
  axios
    .get("/api/upload/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_PREDICTIONS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Delete Prediction
export const deletePrediction = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/upload/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(
        createMessage({ deletePrediction: "Prediction File Deleted!!" })
      );
      dispatch({
        type: DELETE_PREDICTION,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// Add Prediction
export const addPrediction = (upload) => (dispatch, getState) => {
  axios
    .post("/api/upload/", upload, tokenConfig(getState))
    .then((res) => {
      dispatch(
        createMessage({ addPrediction: "The Prediction has been generated!!" })
      );
      dispatch({
        type: ADD_PREDICTION,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
