import { combineReducers } from "redux";
import { reducerDATA_STORES } from "./Reducer";
import { anotherDataStored } from "./Dataanother";
const rootReducer = combineReducers({
  kalaidata: reducerDATA_STORES,
  anotherdata: anotherDataStored,
});

export default rootReducer;
