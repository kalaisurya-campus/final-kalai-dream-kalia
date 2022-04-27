import { ANOTHER_SET_DATA, SET_USERS_DATA } from "../actions/Action";

export const anotherDataStored = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ANOTHER_SET_DATA: {
      return [...action.payload];
    }
    default: {
      return state;
    }
  }
};
