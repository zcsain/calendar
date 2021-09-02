import React from "react";
import { useHistory } from "react-router-dom";
import { DateTime } from "luxon";

// Custom components
import LoginCard from "../elements/LoginCard";

// Dev components
import EventPanel from "../dev_elements/EventPanel";

// Helper functions
import dateToISO from "../../helpers/dateToISO";

// Material UI
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

// Api
import GAPI_CLIENT_CONFIG from "../../api/gapiClientConfig";
import gapiClientInitialization from "../../api/gapiClientInitialization";

const useStyles = makeStyles((theme) => ({
	// Center items in container vertically and horizontally
	container: {
		display: "flex",
		width: "100vw",
		height: "100vh",
		// justifyContent: "center",
		alignItems: "center",
	},
}));

function Login() {
	const classes = useStyles();
	const history = useHistory();
	var gapi = window.gapi;

	const date1 = DateTime.now();
	const date2 = DateTime.now().plus({ hours: 7 });
	const nowDate = dateToISO(DateTime.now());
	const weekLaterDate = dateToISO(DateTime.now().plus({ days: 7 }));

	var event = {
		summary: "Origin Test Event",
		start: {
			dateTime: dateToISO(date1),
		},
		end: {
			dateTime: dateToISO(date2),
		},
		reminders: {
			useDefault: false,
			overrides: [
				{ method: "email", minutes: 24 * 60 },
				{ method: "popup", minutes: 10 },
			],
		},
	};

	const handleLogin = () => {
		gapi.load("client:auth2", () => {
			console.log("Loaded client");

			// Initialize Google API client
			gapi.client.init(GAPI_CLIENT_CONFIG);

			// Load the google calendar
			gapi.client.load("calendar", "v3", () =>
				console.log("Loaded calendar v3")
			);

			// Sign in the user
			gapi.auth2.getAuthInstance().signIn();
		});
	};

	const handleClick = () => {
		gapi.load("client:auth2", () => {
			console.log("Loaded client");

			// Initialize Google API client
			gapi.client.init(GAPI_CLIENT_CONFIG);

			gapi.client.load("calendar", "v3", () =>
				console.log("Loaded calendar v3")
			);

			gapi.auth2
				.getAuthInstance()
				.signIn()
				.then(() => {
					// Add event to calendar
					// addEvent(event);

					// Get events from calendar
					getEvent(nowDate, weekLaterDate);
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
				// calendarId: "primary",
				calendarId: "en.croatian#holiday@group.v.calendar.google.com",
				timeMin: startDate,
				timeMax: endDate,
				showDeleted: false,
				singleEvents: true,
				orderBy: "startTime",
			})
			.then((response) => {
				const events = response.result.items;
				console.log("EVENTS: ", events);
			});
	};

	const deleteEvent = (eventId) => {
		gapi.client.calendar.events
			.delete({
				calendarId: "primary",
				eventId: eventId,
				sendUpdates: "all",
			})
			.then((response) => {
				console.log(response);
				console.log("Event deleted");
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
			<EventPanel
				onCreate={() => addEvent(event)}
				onList7={() => getEvent(nowDate, weekLaterDate)}
			/>
		</Container>
	);
}

export default Login;
