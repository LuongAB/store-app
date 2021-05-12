import React from "react";
import {
	Card,
	Typography,
	Button,
	Image,
	Tag,
	Tooltip,
	notification
} from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
import { addToCart } from "../../redux/CartSlice";
import { useDispatch } from "react-redux";

const { Text } = Typography;

const Style = {
	width: "calc(100% / 4)",
	textAlign: "center"
};

const ProductItem = (product) => {
	const { id, title, price, category, description, image } = product;
	const dispatch = useDispatch();

	const openNotify = () => {
		dispatch(
			addToCart({
				id,
				title,
				price,
				image,
				quantity: 1
			})
		);
		notification.success({
			message: "Add to cart success !",
			duration: 1,
			top: "8rem",
			style: { backgroundColor: "greenyellow" }
		});
	};

	return (
		<Card style={Style}>
			<Tooltip title={description} placement="right">
				<Image
					alt="productItem"
					src={image}
					style={{ width: "11rem", height: "12rem" }}
				/>
			</Tooltip>
			<br />
			<Text type="success" strong>
				{title}
			</Text>
			<br />
			<Text strong>${price}</Text>
			<br />
			<Tag color="green">{category}</Tag>
			<br />
			<br />
			<Button type="primary" onClick={openNotify} icon={<ShoppingOutlined />}>
				Add to cart
			</Button>
		</Card>
	);
};

export default ProductItem;
