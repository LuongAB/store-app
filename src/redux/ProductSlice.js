import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	products: [],
	status: "",
	error: ""
};

export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async () => {
		const response = await axios.get("https://fakestoreapi.com/products");
		return response.data;
	}
);

export const filterProduct = createAsyncThunk(
	"products/filterProduct",
	async (categoryName) => {
		const response = await axios.get(
			`https://fakestoreapi.com/products/category/${categoryName}`
		);
		return response.data;
	}
);

const ProductSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchProducts.pending]: (state) => {
			state.status = "Pending";
		},
		[fetchProducts.fulfilled]: (state, action) => {
			state.status = "Success";
			state.products = action.payload;
		},
		[fetchProducts.rejected]: (state, action) => {
			state.status = "Error";
			state.error = action.error.message;
		},
		[filterProduct.fulfilled]: (state, action) => {
			state.products = action.payload;
		}
	}
});
export default ProductSlice.reducer;
