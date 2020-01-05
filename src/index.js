import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import LoginProvider from "./contexts/LoginContext";
import ROUTE from "./Routes";
import Loader from "./components/Loader";
import ProtectedRoute from "./specialroutes/ProtectedRoute";
import PublicRoute from "./specialroutes/PublicRoute";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Help = lazy(() => import("./pages/Help"));
const Settings = lazy(() => import("./pages/Settings"));
const Landing = lazy(() => import("./pages/Landing"));
const Maker = lazy(() => import("./components/Maker"));
const UnknownPage = lazy(() => import("./pages/404"));

const App = () => {
	return (
		<>
			<Suspense fallback={<Loader />}>
				<LoginProvider>
					<Switch>
						<Route exact path={ROUTE.HOME} component={Landing} />
						<ProtectedRoute
							exact
							path={ROUTE.DASHBOARD}
							component={Dashboard}
						/>
						<PublicRoute exact path={ROUTE.LOGIN} component={Login} />
						<PublicRoute exact path={ROUTE.REGISTER} component={Register} />
						<ProtectedRoute exact path={ROUTE.HELP} component={Help} />
						<ProtectedRoute exact path={ROUTE.SETTINGS} component={Settings} />
						<ProtectedRoute exact path={ROUTE.EDITOR} component={Maker} />
						<Route path="*" component={UnknownPage} />
					</Switch>
				</LoginProvider>
			</Suspense>
		</>
	);
};

const rootElement = document.getElementById("root");
ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	rootElement
);
