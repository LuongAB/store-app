import React, { useEffect } from "react";
import { Select } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../redux/CategorySlice";
import { filterProduct, fetchProducts } from "../../redux/ProductSlice";
const { Option } = Select;

const Style = { width: "15rem" };

const Category = () => {
	const dispatch = useDispatch();
	const categories = useSelector((state) => state.category.categories);

	useEffect(() => {
		dispatch(fetchCategories());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onSelectChange = (value) => {
		if (value === "all") {
			dispatch(fetchProducts());
		} else {
			dispatch(filterProduct(value));
		}
	};

	return (
		<Select defaultValue="all" style={Style} onChange={onSelectChange}>
			<Option value="all">All</Option>
			{categories.map((category, index) => (
				<Option key={index} value={category}>
					{category}
				</Option>
			))}
		</Select>
	);
};

export default Category;
