import { createSlice } from "@reduxjs/toolkit";
import { ProductType, StateType } from "../../type";

interface InitialStateType {
  cart: ProductType[];
  favorite: ProductType[];
}

const initialState: InitialStateType = {
  cart: [],
  favorite: [],
};

export const shofySlice = createSlice({
  name: "shopy",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state?.cart?.find(
        (item) => item?.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

//  selector
export const productIsInCart = (
  state: StateType,
  productId: number | undefined
): boolean => {
  return state.shopy.cart.some((item) => item.id === productId);
};
export const { addToCart } = shofySlice.actions;
export default shofySlice.reducer;
