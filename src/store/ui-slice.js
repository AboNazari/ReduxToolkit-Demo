import { createSlice } from "@reduxjs/toolkit";
const initialState = { showCart: false, notification: null };
const uiSlice = createSlice({
  name: "uiSlice",
  initialState,
  reducers: {
    showCartHanlder(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = {
        title: action.payload.title,
        status: action.payload.status,
        message: action.payload.message,
      };
    },
  },
});

const sendCartData = (cart) => {
  return async (dispatch) => {};
};

export const uiAction = uiSlice.actions;
export default uiSlice.reducer;
