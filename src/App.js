import "./App.css";
import Index from "./components/Page/Index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CartDetail from "./components/Cart/CartDetail";

function App() {
	return (
		<section>
			<Router>
				<Index />

				<Switch>
					<Route path="/about" />
					<Route path="/contact" />
					<Route path="/cart" component={Cart}></Route>
					<Route path="/cartDetail" component={CartDetail}></Route>
					<Route exact path="/"></Route>
				</Switch>
			</Router>
		</section>
	);
}

export default App;
