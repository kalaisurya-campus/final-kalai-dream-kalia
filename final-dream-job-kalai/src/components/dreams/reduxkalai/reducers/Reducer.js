import { SET_USERS_DATA } from "../actions/Action";

export const reducerDATA_STORES = (state = [], action) => {
  // console.log(action);
  switch (action.type) {
    case SET_USERS_DATA: {
      return [...action.value];
    }
    default:
      return state;
  }
};
