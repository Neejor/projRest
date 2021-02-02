import React from "react";
import {useSelector} from "react-redux";
import {ThemeProvider, createGlobalStyle} from "styled-components";

// Componnets
import Navbar from "./components/navbar"
import SearchBar from "./components/searchBar";
import DET from "./components/detail";
import store from "./store/store";

// Themes
import GlobalStyle from "./themes/global";
import {lightTheme, darkTheme} from "./themes/darkTheme";
import axios from "axios";

import {Transition} from "react-transition-group";

const defaultStyles= {
  transition: `opacity 300ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 1 }
};

function setDetailCard(country) {
  return {
    type: "detail",
    countryCard: country
  };
}

function App() {
  const [detail, setDetail] = React.useState("closed");
  var x = 0;
  
  const [showModal, setShowModal] = React.useState(false);
  const handleClick= () => setShowModal(!showModal);

  let list = useSelector(state => state.load.data);
  let countryCard = useSelector(state => state.detail.countryDetail[0]);
  
  function backButton() {
    setDetail("closed");
  }
  
  function borderClick(e) {
    store.dispatch(thunkedBorder(e.target.innerText));
    setDetail("open" + x);
  }

  const thunkedBorder = (code) => (
    dispatch => 
      axios.get("https://restcountries.eu/rest/v2/alpha/" + code)
      .then(res => {
          const DATA = [res.data];
          console.log(DATA);
        dispatch(setDetailCard(DATA));
      }) 
      .catch(err => {
        console.log("ERROR: ");
        console.log(err);
      })
  )

  function CardList(country_item,ind) {
    const thunkedDetail = (code) => (
      dispatch => 
        axios.get("https://restcountries.eu/rest/v2/callingcode/" + code)
        .then(res => {
          console.log(res.data);
          dispatch(setDetailCard(res.data));
          setDetail("open");
        }) 
        .catch(err => {
          console.log("ERROR: ");
          console.log(err);
        })
    )

    function detail_card(code) {
      console.log(code);
      store.dispatch(thunkedDetail(code));
    }
  
  
    return (
      <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="card element" onClick={() => {return detail_card(country_item.callingCodes[0]);}}  style={{width: "15rem", height:"20rem", marginBottom: "3rem"}}>
                <img className="card-img-top" src={country_item.flag} alt="Card image cap" style={{height: "10rem"}} />
                <div className="card-body">
                    <h5 className="card-title">{country_item.name}</h5>
                    <p className="card-text"><span>Population:</span> {country_item.population}</p>
                    <p className="card-text"><span>Region:</span> {country_item.region}</p>
                    <p className="card-text"><span>Capital:</span> {country_item.capital}</p>
                </div>
            </div>
        </div>
    );
  }

  const [theme,setTheme] = React.useState("dark");
  const [themeText,setThemeText] = React.useState("Light");

  function toggle() {
    if(theme === "light"){
      setThemeText("Light");
      setTheme("dark");
      setShowModal(!showModal);
    }
    else {
      setThemeText("Dark");
      setTheme("light");
      setShowModal(!showModal);
    }
  }

  if(detail == "closed") {
  return (
    <Transition in={showModal} timeout={150}>
    {state => (
    <div style = {{...defaultStyles,
                  ...transitionStyles[state]
                  }}>
      <ThemeProvider theme = {theme === "light" ? lightTheme : darkTheme}>
      <React.Fragment>
        <GlobalStyle />
        <Transition in={showModal} timeout={150}>
            {state => (
              <Navbar toggle_func = {toggle} text = {themeText}
                styles={{
                  ...defaultStyles,
                  ...transitionStyles[state]
                }}
                onClicks={handleClick}/>
            )}
          </Transition>
        <div id = "par" className="container-fluid">
        <SearchBar />
        <div className="row">
          {list.map(CardList)}        
        </div>
        </div>
      </React.Fragment>
      </ThemeProvider>
    </div>
    )}
    </Transition>
  );
  }
  
  else {
    console.log(countryCard);
    return (
    <Transition in={showModal} timeout={200}>
    {state => (
    <div style = {{...defaultStyles,
                  ...transitionStyles[state]
                  }}>
      <ThemeProvider theme = {theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Transition in={showModal} timeout={300}>
          {state => (
            <Navbar toggle_func = {toggle} text = {themeText}
              styles={{
                ...defaultStyles,
                ...transitionStyles[state]
              }}
              onClicks={handleClick}/>
          )}
        </Transition>
        <DET det = {countryCard} func = {backButton} func2 = {borderClick}/>
      </ThemeProvider>
      </div>
    )}
    </Transition>
    )
  }
}

export default App;
