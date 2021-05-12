import React, { useState } from "react";
import { Drawer, Badge, Button, Empty, Divider } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
	const [visible, setVisible] = useState(false);
	const cart = useSelector((state) => state.cart.cart);
	const cartCount = useSelector((state) => state.cart.cart).length;
	const totalPrices = cart.reduce(function (total, current) {
		return total + current.quantity * current.price;
	}, 0);

	const showCart = () => {
		setVisible(true);
	};

	const onDrawerClose = () => {
		setVisible(false);
	};

	return (
		<section>
			<Drawer
				title="Cart"
				placement="right"
				closable={true}
				onClose={onDrawerClose}
				visible={visible}
				width="40rem"
				style={{ textAlign: "center" }}
			>
				{cartCount <= 0 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /> : null}
				{cart.map((item) => (
					<section
						key={item.id}
						style={{ display: "flex", flexDirection: "column" }}
					>
						<section
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "start"
							}}
						>
							<img
								src={item.image}
								alt="product item"
								style={{ width: "3rem", height: "3rem" }}
							/>
							<p> {item.title}</p>
						</section>
						<strong>
							{" "}
							${item.price} x {item.quantity} = ${item.price * item.quantity}
						</strong>
						<Divider style={{ backgroundColor: "#000" }} />
					</section>
				))}
				<strong>Total : ${totalPrices.toFixed(2)} </strong>
				<br />
				<br />
				<Link to="/cartDetail">
					<Button type="primary" onClick={onDrawerClose}>
						View cart detail
					</Button>
				</Link>
			</Drawer>
			<Badge count={cartCount} overflowCount={9}>
				<ShoppingCartOutlined
					style={{ fontSize: "2rem", color: "#fff" }}
					onClick={showCart}
				/>
			</Badge>
		</section>
	);
};

export default Cart;
