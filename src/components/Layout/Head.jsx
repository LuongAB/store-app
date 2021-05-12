import React from "react";
import { Menu } from "antd";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";

const Style = {
	display: "flex",
	justifyContent: "space-around"
};

const Head = () => {
	return (
		<Menu
			theme="dark"
			mode="horizontal"
			defaultSelectedKeys={["1"]}
			style={Style}
		>
			<Menu.Item key="1">
				<Link to="/">Home</Link>
			</Menu.Item>
			<Menu.Item key="2">About</Menu.Item>
			<Menu.Item key="3">Contact</Menu.Item>
			<Menu.Item key="4">
				<Cart />
			</Menu.Item>
		</Menu>
	);
};

export default Head;
