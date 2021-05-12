import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/ProductSlice";
import categoryReducer from "../redux/CategorySlice";
import cartReducer from "../redux/CartSlice";

export const store = configureStore({
	reducer: {
		products: productReducer,
		category: categoryReducer,
		cart: cartReducer
	}
});
