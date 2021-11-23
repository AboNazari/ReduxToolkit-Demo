import { uiAction } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://dummyproject-61f36-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Fetching cart data failed!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const data = await fetchData();
      dispatch(
        cartActions.replaceCartItems({
          items: data.items || [],
          totalQuantity: data.totalQuantity,
        })
      );
      dispatch(
        uiAction.showNotification({
          title: "Succes",
          status: "success",
          message: "Cart data fetched Successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          title: "Error",
          status: "error",
          message: "fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        title: "pending...",
        status: "sending",
        message: "sending cart data!",
      })
    );

    const sendData = async () => {
      const response = await fetch(
        "https://dummyproject-61f36-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("send cart data failed!");
      }
    };

    try {
      await sendData();

      dispatch(
        uiAction.showNotification({
          title: "Succes",
          status: "success",
          message: "Cart Data Send Successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          title: "Error",
          status: "error",
          message: "sending cart data failed!",
        })
      );
    }
  };
};
