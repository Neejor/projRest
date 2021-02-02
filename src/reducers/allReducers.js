import onLoad from "./onLoad";
import detailReducer from "./detail";
import {combineReducers} from "redux";

const initial_state = {
    loading: false,
    data: [],
    err: ""
};

const allReducers = combineReducers({
    load: onLoad,
    detail: detailReducer
});

export default allReducers;