import React, { useContext } from "react";
import { Context } from "./js/store/AppContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./js/store/AppContext";
import { Login } from "./js/views/Login";
import Administracion from "./js/views/Administracion";
import Contabilidad from "./js/views/Contabilidad";
import PaginaNoEncontrada from "./js/views/PaginaNoEncontrada";
import Navbar from "./js/component/Navbar";
import Spinner from "./js/Helper/Spinner";
import "foundation-sites/dist/css/foundation.min.css";
import "./styles/App.css";

const Layout = () => {
	const { store } = useContext(Context);
	const basename = process.env.BASENAME || "";

	return (
		<div className={store.witch ? "off-canvas-wrapper Spinner" : "Spinner"}>
			<div
				className={
					store.witch
						? "off-canvas-wrapper SpinnerBase"
						: "SpinnerBase Principal"
				}
				data-off-canvas-wrapper
			>
				<BrowserRouter basename={basename}>
					<Navbar />
					<div
						className={store.witch ? "off-canvas-content" : "SwitchSecundario"}
						data-off-canvas-content
					>
						<Switch className='Switch'>
							<Route exact path='/'>
								<Login />
							</Route>
							<Route exact path='/Contabilidad'>
								<Contabilidad />
							</Route>
							<Route exact path='/Administracion'>
								<Administracion />
							</Route>
							{/* 404 */}
							<Route exact path='*'>
								<PaginaNoEncontrada />
							</Route>
						</Switch>
					</div>
				</BrowserRouter>
			</div>
			{store.spinner ? (
				<div className='SpinnerCharge'>
					<div className='SpinnerChargeSub'>
						<Spinner />
					</div>
				</div>
			) : null}
		</div>
	);
};

export default injectContext(Layout);
