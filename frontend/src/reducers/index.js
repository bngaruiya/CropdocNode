import { combineReducers } from "redux";
import predictions from "./predictions";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
  predictions,
  errors,
  messages,
  auth,
});
