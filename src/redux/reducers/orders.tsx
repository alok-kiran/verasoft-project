export const GET_ORDERS = "GET_ORDERS";
const SET_ORDERS = "SET_ORDERS";

export const getOrders = () => ({
  type: GET_ORDERS
});

export const setOrders = (orders: any) => ({
  type: SET_ORDERS,
  orders
});

const initialState = {
  orders: {}  
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_ORDERS:
      const { orders } = action;
      return { ...state, orders }; 
    default:
      return state;
  }
};
