import { combineReducers } from "redux";
import gamesReducer from "./reducers/gamesReducer";
import aramaModalReducer from "./reducers/aramaModalReducer";


const rootReducer = combineReducers({
    games: gamesReducer,
    aramaModal: aramaModalReducer
})

export default rootReducer;