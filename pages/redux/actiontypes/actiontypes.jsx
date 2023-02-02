export const actions = {
  SET_QUERY: "SET_QUERY",
  SET_FROM: "SET_FROM",
  SET_SENT: "SET_SENT",
  SET_CONF: "SET_CONF",
};

export const setQuery = (payload) => ({
  type: actions.SET_QUERY,
  payload: payload,
});
export const setFrom = (payload) => ({
  type: actions.SET_FROM,
  payload: payload,
});
