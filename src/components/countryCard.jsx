import React from "react";
import {useSelector} from "react-redux";

function CardList(country_item,ind) {
    // if(ind == 0 || (ind+1)%4 == 0)
    // return (
    //     <div class="row">
    //     <div className="col-lg-3 col-md-4 col-sm-6">
    //         <div className="card" style={{width: "15rem"}}>
    //             <img className="card-img-top" src={country_item.flag} alt="Card image cap" />
    //             <div className="card-body">
    //                 <h5 className="card-title">{country_item.name}</h5>
    //                 <p className="card-text">Population: {country_item.population}</p>
    //                 <p className="card-text">Region: {country_item.region}</p>
    //                 <p className="card-text">Capital: {country_item.capital}</p>
    //             </div>
    //         </div>
    //     </div>
    //     </div>
    // )
    
    return (
        
            <div className="card element" style={{width: "15rem"}}>
                <img className="card-img-top" src={country_item.flag} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{country_item.name}</h5>
                    <p className="card-text">Population: {country_item.population}</p>
                    <p className="card-text">Region: {country_item.region}</p>
                    <p className="card-text">Capital: {country_item.capital}</p>
                    <p>DD</p>
                </div>
            </div>
        
    );
}

function Card() {
    console.log(useSelector(state => state.data));
    let list = useSelector(state => state.data);

//     return (
//         <div className="col-lg-3 col-md-4 col-sm-6">
//         <div className="card" style={{width: "15rem"}}>
//             <img className="card-img-top" src="https://i.pinimg.com/originals/5d/38/ea/5d38ea96deb06fc8adb7d135332d87e0.gif" alt="Card image cap" />
//             <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             </div>
//         </div>
//         </div>);
// }
    return (
        <div className="col-lg-3 col-md-4 col-sm-6">{list.map(CardList)}</div>
    )
    }
// https://thumbs.gfycat.com/DistantOldAcornweevil-size_restricted.gif
export default Card;