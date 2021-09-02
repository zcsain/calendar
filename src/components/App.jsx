import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// Api
import gapiClientInitialization from "../api/gapiClientInitialization";

// Custom
import Calendar from "./pages/Calendar";
import Login from "./pages/Login";
import history from "../history";

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
	// Initialize Google API client and load calendar
	gapiClientInitialization();

	return (
		<MuiThemeProvider theme={lightTheme}>
			<CssBaseline>
				<Router history={history}>
					<Switch>
						<Route path="/" exact>
							<Login />
						</Route>
						<Route path="/calendar" exact>
							<Calendar />
						</Route>
						{/* Redirect all not existing routes back to roote route */}
						<Redirect from="/" to="/" />
					</Switch>
				</Router>
			</CssBaseline>
		</MuiThemeProvider>
	);
}

export default App;
