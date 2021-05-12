import React, { useEffect } from "react";
import { fetchProducts } from "../../redux/ProductSlice";
import { useSelector, useDispatch } from "react-redux";
import { Skeleton } from "antd";
import ProductItem from "./ProductItem";
import Category from "../Category/Category";

const Style = {
	display: "flex",
	flexWrap: "wrap",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItem: "center"
};

const ProductList = () => {
	const dispatch = useDispatch();
	const productStatus = useSelector((state) => state.products.status);
	const products = useSelector((state) => state.products.products);

	const renderList = products.map((product) => (
		<ProductItem key={product.id} {...product} />
	));

	useEffect(() => {
		dispatch(fetchProducts());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section>
			<h2>Product List</h2>
			<section>
				<Category />
			</section>

			<section style={Style}>
				{productStatus === "Pending" ? (
					<Skeleton loading={productStatus} active></Skeleton>
				) : null}

				{renderList}
			</section>
		</section>
	);
};

export default ProductList;
