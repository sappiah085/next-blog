import { actions } from "../actiontypes/actiontypes";
const INITIALSTATE = {
  query: [],
  from: 0,
  sent: "sent",
};

export function store(state = INITIALSTATE, action) {
  switch (action.type) {
    case actions.SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case actions.SET_FROM:
      return {
        ...state,
        from: action.payload,
      };
    case actions.SET_CONF:
      return {
        ...state,
        sent: action.payload,
      };
    default:
      return state;
  }
}
