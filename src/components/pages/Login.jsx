import React from "react";

// Custom
import LoginCard from "../elements/LoginCard";

// Material UI
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	// Center items in container vertically and horizontally
	container: {
		display: "flex",
		width: "100vw",
		height: "100vh",
		justifContent: "center",
		alignItems: "center",
	},
}));

function Login() {
	const classes = useStyles();
	var gapi = window.gapi;

	// Hide keys/ids in .env so they can be ignored when pushing to GitHub
	// Keys/ids should be on server side code, not client side code.
	// "REACT_APP_" prefix required for React detect variables in .env files
	const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
	const API_KEY = process.env.REACT_APP_API_KEY;

	// Array of API discovery doc URLs for APIs
	var DISCOVERY_DOCS = [
		"https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
	];

	// Authorization scopes required by the API; multiple scopes can be
	// included, separated by spaces.
	var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

	const handleClick = () => {
		gapi.load("client:auth2", () => {
			console.log("Loaded client");

			gapi.client.init({
				apiKey: API_KEY,
				clientId: CLIENT_ID,
				discoveryDocs: DISCOVERY_DOCS,
				scope: SCOPES,
			});

			gapi.client.load("calendar", "v3", () =>
				console.log("Loaded calendar v3")
			);

			gapi.auth2.getAuthInstance().signIn();
		});
	};

	return (
		<Container className={classes.container} maxWidth="xs">
			<LoginCard
				description="To access your calendar sign in using your Google account"
				title={"Sign in"}
				buttonText={"Sign in with google"}
				onButtonClick={handleClick}
			/>
		</Container>
	);
}

export default Login;
