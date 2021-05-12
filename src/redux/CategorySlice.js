import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	categories: []
};

export const fetchCategories = createAsyncThunk(
	"categories/fetchCategories",
	async () => {
		const response = await axios.get(
			"https://fakestoreapi.com/products/categories"
		);
		return response.data;
	}
);

const CategorySlice = createSlice({
	name: "categories",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchCategories.fulfilled]: (state, action) => {
			state.categories = action.payload;
		}
	}
});

export default CategorySlice.reducer;
