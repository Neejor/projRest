import allReducers from "../reducers/allReducers"
import onLoad from "../reducers/onLoad"
import {createStore, compose, applyMiddleware} from "redux";
import Axios from "axios";

const thunk = require("redux-thunk").default;

const setList = (countries) => {
    return {
      type: "onLoad",
      countries: countries
    }
  }
  
  const List = () => {
      return function(dispatch){
          console.log("SS");
          Axios.get("https://restcountries.eu/rest/v2/all?fields=name;population;capital;region;flag;callingCodes")
              .then(res => {
                  dispatch(setList(res.data));
              })
              .catch(err => {
                  console.log(err);
              })
      }
  }
  
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const myStore = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));
  myStore.subscribe(()=>{console.log(myStore.getState());});
  myStore.dispatch(List());

  export default myStore;