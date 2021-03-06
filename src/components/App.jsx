import React, { useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// Api
import gapiClientInitialization from "../api/gapiClientInitialization";
import gapiCheckSignInStatus from "../api/gapiCheckSignInStatus";

// Custom components
import Calendar from "./pages/Calendar";
import SignIn from "./pages/SignIn";
import history from "../history";

// Dev components
import EventPanel from "./dev_elements/EventPanel";

// Material UI
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

const lightTheme = createTheme({
	palette: {
		type: "light",
		primary: {
			main: "#1976d2",
		},
		secondary: {
			main: "#fff",
		},
	},
	overrides: {
		MuiTableCell: {
			root: {
				//This can be referred from Material UI API documentation.
				padding: "12px 8px",
			},
		},
		MuiTableRow: {
			root: {
				"&:last-child td": {
					borderBottom: 0,
				},
			},
		},
	},
});

function App() {
	const [signInStatus, setSignInStatus] = useState(false);

	const handleSignInStatus = () => {
		setSignInStatus(gapiCheckSignInStatus());
	};

	useEffect(() => {
		// Initialize Google API client and load calendar
		gapiClientInitialization(handleSignInStatus);
	}, []);

	return (
		<MuiThemeProvider theme={lightTheme}>
			<CssBaseline>
				<Router history={history}>
					<Switch>
						<Route path="/" exact>
							<SignIn onSignInChange={handleSignInStatus} />
						</Route>
						<Route path="/calendar" exact>
							<Calendar signInStatus={signInStatus} />
						</Route>
						{/* Redirect all not existing routes back to roote route */}
						<Redirect from="/" to="/" />
					</Switch>
					{/* Dev component */}
					<EventPanel
						onSignInChange={handleSignInStatus}
						position={"topLeft"}
					/>
				</Router>
			</CssBaseline>
		</MuiThemeProvider>
	);
}

export default App;
