import { combineReducers } from "redux";
import shuffleFiguresReducer from "./shuffleFiguresReducer"
const rootReducer = combineReducers({
    sFR:shuffleFiguresReducer
});

export default rootReducer; 