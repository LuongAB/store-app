import React from "react";
import { Layout } from "antd";
import ProductList from "../Product/ProductList";
const { Content } = Layout;

const Main = () => {
	return (
		<Content style={{ padding: "1rem 2rem" }}>
			<ProductList />
		</Content>
	);
};

export default Main;
