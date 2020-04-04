export const patch_userdata = () => {
  return {
    type: "GET_USERDATA"
  };
};
export const set_userdata = data => {
  return {
    type: "SET_USERDATA",
    payload: data
  };
};
