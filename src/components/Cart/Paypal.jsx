import React, { useRef, useEffect } from "react";

const Paypal = ({ totalPrice }) => {
	const paypal = useRef();

	useEffect(() => {
		window.paypal
			.Buttons({
				createOrder: (data, action, err) => {
					return action.order.create({
						intent: "capture",
						purchase_units: [
							{
								description: "First Order",
								amount: {
									value: 650
								}
							}
						]
					});
				},
				onApprove: async (data, actions) => {
					const order = await actions.order.capture();
					console.log(order);
				},
				onError: (err) => {
					console.log(err);
				}
			})
			.render(paypal.current);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<div ref={paypal} id="payButton"></div>
		</div>
	);
};

export default Paypal;
