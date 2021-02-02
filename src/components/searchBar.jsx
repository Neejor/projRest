import axios from "axios";
import React from "react";
import store from "../store/store";

function setList(countries,text) {
    // countries = countries.filter(item => item.region==text);
    console.log(countries);
    if(text == "All")
        text = "onLoad";
    return {
        type: text,
        countries: countries
    }
}

function setSearch(countries) {
    return {
        type: "Search",
        countries
    }
}

function searchBar() {
    const thunkedList = (text) => (
        dispatch => 
            axios.get("https://restcountries.eu/rest/v2/all?fields=name;population;capital;region;flag;callingCodes;borderCountries")
            .then(res => {
                dispatch(setList(res.data,text));
            })
            .catch(err => {
                console.log(err);
            })
    )

    function callDispatch(e) {
        console.log(e.target.text);
        store.dispatch(thunkedList(e.target.text));
    }

    const thunkedSearch = (text) => (
        dispatch =>
            axios.get("https://restcountries.eu/rest/v2/all?fields=name;population;capital;region;flag;callingCodes;borderCountries")
            .then(res => {
                let arr = [];
                let input = "^" + text.charAt(0).toUpperCase() + text.slice(1) + ".";

                res.data.forEach(item => {
                    if(item.name.match(RegExp(input)))
                        arr.push(item);
                })
                dispatch(setSearch(arr));
            })
            .catch(err => {
                console.log(err);
            })
    )

    function search(e) {
        store.dispatch(thunkedSearch(e.target[1].value));  
        console.log(e.target[1].value);
        e.preventDefault();      
    }

    return (
        // <div className="navbar navbar-expand-lg" style={{backgroundColor: "transparent"}}>
            <div className="container-fluid pt-4 pb-4" id="searchBar">
                <div className="row">
                <div className="col-md-6 col-sm-12 FORM">
                <form className="d-flex" onSubmit={search}>
                    <div className="nav-item">
                        <div className="input-group">
                            <button className="element BTN" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                            <input className="form-control element INP" type="search" placeholder="Search..." aria-label="Search for a country..." />
                        </div>
                    </div>
                </form>
                </div>
                <div className="col-md-6 col-sm-12" id="dropdown">
                    <div className="nav-item">
                    <div className="dropdown">
                        <button className="btn dropdown-toggle element" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul className="dropdown-menu element" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item element" onClick={callDispatch}>All</a></li>
                            <li><a className="dropdown-item element" onClick={callDispatch}>Asia</a></li>
                            <li><a className="dropdown-item element" onClick={callDispatch}>Africa</a></li>
                            <li><a className="dropdown-item element" onClick={callDispatch}>Americas</a></li>
                            <li><a className="dropdown-item element" onClick={callDispatch}>Polar</a></li>
                            <li><a className="dropdown-item element" onClick={callDispatch}>Oceania</a></li>
                            <li><a className="dropdown-item element" onClick={callDispatch}>Europe</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        // </div>
    )
}

export default searchBar;