import games from "../initialValues/games";

const initialState = {
    games : games
}

export default function gamesReducer(state = initialState,{type, payload}){
    switch (type) {
        case "games":
            return {...state}

            default:
            return state;
    
        
    }
}