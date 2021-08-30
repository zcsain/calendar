import React from "react";
import { useHistory } from "react-router-dom";

// Custom components
import LoginCard from "../elements/LoginCard";

// Helper functions
import dateToISO from "../../helpers/dateToISO";

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
	const history = useHistory();
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
	var SCOPES =
		"https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar";

	const date1 = new Date("August 31, 2021 15:00:00");
	const date2 = new Date("August 31, 2021 16:00:00");

	var event = {
		summary: "Origin Test Event",
		start: {
			dateTime: dateToISO(date1),
			// dateTime: "2015-05-28T09:00:00-07:00",
			// timeZone: "America/Los_Angeles",
		},
		end: {
			dateTime: dateToISO(date2),
			// dateTime: "2015-05-28T17:00:00-07:00",
			// timeZone: "America/Los_Angeles",
		},
		reminders: {
			useDefault: false,
			overrides: [
				{ method: "email", minutes: 24 * 60 },
				{ method: "popup", minutes: 10 },
			],
		},
	};

	const handleClick = () => {
		gapi.load("client:auth2", () => {
			console.log("Loaded client");

			// Initialize Google API client
			gapi.client.init({
				apiKey: API_KEY,
				clientId: CLIENT_ID,
				discoveryDocs: DISCOVERY_DOCS,
				scope: SCOPES,
			});

			gapi.client.load("calendar", "v3", () =>
				console.log("Loaded calendar v3")
			);

			gapi.auth2
				.getAuthInstance()
				.signIn()
				.then(() => {
					// Add event to calendar
					addEvent(event);

					// Get events from calendar
					// const nowObj = Date.now();
					// const nowDate = dateToISO(new Date(nowObj));
					// const weekLaterDate = dateToISO(
					// 	new Date(nowObj + 7 * 24 * 60 * 60 * 1000)
					// );
					// getEvent(nowDate, weekLaterDate);
				});
		});
	};

	const addEvent = (event) => {
		var request = gapi.client.calendar.events.insert({
			calendarId: "primary",
			resource: event,
		});

		request.execute(function (event) {
			window.open(event.htmlLink);
		});

		history.push("/calendar");
	};

	// Get Events from calendar
	const getEvent = (startDate, endDate) => {
		gapi.client.calendar.events
			.list({
				calendarId: "primary",
				// timeMin: new Date().toISOString(),
				timeMin: startDate,
				timeMax: endDate,
				showDeleted: false,
				singleEvents: true,
				// maxResults: 10,
				orderBy: "startTime",
			})
			.then((response) => {
				const events = response.result.items;
				console.log("EVENTS: ", events);
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
