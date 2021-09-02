import history from "../history";

// Helpers
import gapiCheckSignInStatus from "./gapiCheckSignInStatus";
import dateToISO from "../helpers/dateToISO";

const gapiAddEvent = (title, startTime, endTime) => {
	const gapi = window.gapi;

	// Get sign in status
	const signInStatus = gapiCheckSignInStatus();

	// Define event object
	const event = {
		summary: title,
		start: {
			dateTime: dateToISO(startTime),
		},
		end: {
			dateTime: dateToISO(endTime),
		},
		reminders: {
			useDefault: true,
		},
	};

	// If user signed in add event
	if (signInStatus) {
		const request = gapi.client.calendar.events.insert({
			calendarId: "primary",
			resource: event,
		});

		request.execute((event) => {
			console.log("Event added");
		});
	} else {
		// If user not signed in, redirect to sign in page
		history.push("/");
	}
};

export default gapiAddEvent;
