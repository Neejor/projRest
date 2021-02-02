import React from "react";

function detailCard(props) {
    console.log(props);

    function iterate(item) {
        let LST = "";
        var i=0;
        for(i=0; i<item.length-1;i++)
            LST += item[i].name + ", ";
        LST += item[i].name;
        return LST;
    }

    function border(item) {
        console.log(item);
        return(
            <button className="btn element" onClick={props.func2}>{item}</button>
        )
    }
    
    var arr = [];
    // console.log(props.det);
    for(let i=0;i<props.det.borders.length && i<3;i++)
        arr[i] = (props.det.borders[i]);
    console.log(arr);

    return(
        <div className="detailBody">
        <div className="container-fluid">
            <div className="row">
                <div className="col backBtn">
                        <button className="btn element" onClick = {props.func}><i class="fas fa-arrow-left"></i>Back</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5 col-sm-12 flag">
                    <img src = {props.det.flag} id="flag" alt = "flag"></img>
                </div>

                <div className="col-md-7 col-sm-12 info">
                    <h3 className="card-title">{props.det.name}</h3>
                        <div className="col content">
                            <p className="card-texts"><span>Native Name:</span> {props.det.nativeName}</p>
                            <p className="card-texts"><span>Popluation:</span> {props.det.population}</p>
                            <p className="card-texts"><span>Region:</span> {props.det.region}</p>
                            <p className="card-texts"><span>Sub Region:</span> {props.det.subregion}</p>
                            <p className="card-texts"><span>Capital:</span> {props.det.capital}</p>
                            <p className="card-texts"><span>Top Level Domain:</span> {props.det.topLevelDomain[0]}</p>
                            <p className="card-texts"><span>Currencies:</span> {iterate(props.det.currencies)}</p>
                            <p className="card-texts"><span>Languages:</span> {iterate(props.det.languages)}</p>
                        </div>
                            <div className="col">
                                Border Countries:</div><div className="col-auto"> 
                                                  {arr.map(border)}
                            </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default detailCard;