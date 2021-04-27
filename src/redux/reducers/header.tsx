export const GET_HEADER = "GET_HEADER";
const SET_HEADER = "SET_HEADER";

export const getHeader = () => ({
  type: GET_HEADER
});

export const setHeader = (header: any) => ({
  type: SET_HEADER,
  header
});

const initialState = {
 header: null  
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_HEADER:
      const { header } = action;
      return { ...state, header };
    default:
      return state;
  }
};
