const loadReducer = (state = {data: []}, action) => {
    switch(action.type) {
        case "onLoad":
            return {
                ...state,
                data: action.countries
            }
        
        case "Africa":
                return {data: action.countries.filter(item => item.region == "Africa")};
        case "Asia":
                return {data: action.countries.filter(item => item.region == "Asia")};
        case "Americas":
                return {data: action.countries.filter(item => item.region == "Americas")};
        case "Europe":
            return {data: action.countries.filter(item => item.region == "Europe")};
        case "Polar":
            return {data: action.countries.filter(item => item.region == "Polar")};
        case "Oceania":
            return {data: action.countries.filter(item => item.region == "Oceania")};

        case "Search":
            return {data: action.countries};
        default:
            return state;
    }
};

export default loadReducer;