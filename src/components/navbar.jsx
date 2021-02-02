import React from "react";

function navbar(props) {
  if(props.text == "Dark")
    var icon = "far fa-moon";
  else
    var icon = "far fa-sun";

  return (
    <div className="navbar element navbar-expand-lg">
      <div className="container-fluid ms-3 me-3 pt-2 pb-2">
        <div className="nav-item" id="navbarTitle" style={{fontWeight: 800}}>
          <h5 style={{fontWeight: "800", margin: "0"}}>Where in the world?</h5>
        </div>
        <div className="nav-item MODE" style = {props.styles} onClick = {props.toggle_func}>
          <i class={icon} style={{padding: "5px"}}></i>{props.text} Mode
        </div>
      </div>
      
    </div>
  )
}

export default navbar;
