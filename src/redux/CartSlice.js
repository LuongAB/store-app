import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: []
};

const CartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state.cart.push(action.payload);
			const exists = state.cart.filter(
				(product) => product.id === action.payload.id
			);

			if (exists.length <= 1) {
				const exitsProduct = state.cart.find(
					(product) => product.id === action.payload.id
				);
				const withoutExists = state.cart.filter(
					(product) => product.id !== action.payload.id
				);
				state.cart = withoutExists.concat(exitsProduct);
			} else {
				const exitsProduct = state.cart.find(
					(product) => product.id === action.payload.id
				);
				const withoutExists = state.cart.filter(
					(product) => product.id !== action.payload.id
				);
				if (exitsProduct) {
					exitsProduct.quantity += action.payload.quantity;
				}
				state.cart = withoutExists.concat(exitsProduct);
			}
		}
	}
});

export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
