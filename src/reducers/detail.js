const detailReducer = (state = {countryDetail: []}, action) => {
    switch(action.type) {
        case "detail":
            console.log("Here");
            return {
                countryDetail: action.countryCard
            };
        
        default:
            return state;
    }
};

export default detailReducer;