import * as CONST from "../Const/index";
var allJobs_initialstate = {
  status: "",
  msg: "",
};

export default function(state = allJobs_initialstate, action) {  
    if (action.type === CONST.JOB_SEARCH_SUCCESS) {
    return {
      ...state,
      status: action.payload.status,
      msg: action.payload.msg
    };
  }
  if (action.type === CONST.JOB_SEARCH_ERROR) {
    return {
      ...state,
      status: "error",
      msg: action.payload.msg
    };
  }
  return state;
}
