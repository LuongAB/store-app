import React, { useState } from "react";
import { Modal, Divider, Empty, Button } from "antd";
import { useSelector } from "react-redux";
import Paypal from "./Paypal";

const CartDetail = () => {
	const [cartDetailVisible, setCartDetailVisible] = useState(true);
	const [checkout, setCheckout] = useState(false);

	const cart = useSelector((state) => state.cart.cart);
	const cartCount = useSelector((state) => state.cart.cart).length;
	const totalPrices = cart.reduce(function (total, current) {
		return total + current.quantity * current.price;
	}, 0);

	const onOK = () => {
		setCartDetailVisible(false);
	};

	const onCancel = () => {
		setCartDetailVisible(false);
	};

	return (
		<Modal
			title="Cart"
			visible={cartDetailVisible}
			onOk={onOK}
			onCancel={onCancel}
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

			{checkout ? (
				<Paypal {...totalPrices} />
			) : (
				<Button onClick={() => setCheckout(true)}>Checkout</Button>
			)}
		</Modal>
	);
};

export default CartDetail;
