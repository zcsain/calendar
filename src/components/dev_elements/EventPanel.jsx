import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { DateTime } from "luxon";

// Custom components
import RedirectButton from "./RedirectButton";

// Helpers
import dateToISO from "../../helpers/dateToISO";
import startOfDayISO from "../../helpers/startOfDayISO";
import endOfDayISO from "../../helpers/endOfDayISO";
import weekdayFromISO from "../../helpers/weekdayFromISO";
import weekNumberFromISO from "../../helpers/weekNumberFromISO";

// Api
import gapiSignOut from "../../api/gapiSignOut";

// Material UI
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
	bottomRight: {
		position: "fixed",
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	},
	bottomLeft: {
		position: "fixed",
		bottom: theme.spacing(2),
		left: theme.spacing(2),
	},
	topRight: {
		position: "fixed",
		top: theme.spacing(2),
		right: theme.spacing(2),
	},
	topLeft: {
		position: "fixed",
		top: theme.spacing(2),
		left: theme.spacing(2),
	},
	card: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		borderRadius: theme.spacing(1),
		padding: theme.spacing(2),
		position: "fixed",
		opacity: 0.6,
	},
	button: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(1),
		borderRadius: theme.spacing(1),
	},
}));

function EventPanel({ onCreate, onDelete, onList1, position, onSignInChange }) {
	const classes = useStyles();
	const gapi = window.gapi;

	const cardStyle = clsx({
		[classes.card]: true, // always applies
		[classes.bottomLeft]: position === "bottomLeft",
		[classes.bottomRight]: position === "bottomRight",
		[classes.topLeft]: position === "topLeft",
		[classes.topRight]: position === "topRight",
	});

	// 7 day time frame
	const nowDate = dateToISO(DateTime.now());
	const weekLaterDate = dateToISO(DateTime.now().plus({ days: 7 }));

	// 30 day time frame
	const days30LaterDate = dateToISO(DateTime.now().plus({ days: 30 }));

	// Get Events from calendar
	const getEventList = (startDate, endDate) => {
		gapi.client.calendar.events
			.list({
				calendarId: "primary",
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

	// Sign out
	const handleSignOut = () => {
		// gapi.auth2.getAuthInstance().signOut();
		gapiSignOut(onSignInChange);
	};

	return (
		<Card className={cardStyle} raised>
			<Button
				className={classes.button}
				variant="contained"
				fullWidth
				onClick={() =>
					console.log(window.gapi.auth2.getAuthInstance().isSignedIn.get())
				}
			>
				Check Login Status
			</Button>
			<Button
				className={classes.button}
				variant="contained"
				color="primary"
				fullWidth
				onClick={onDelete}
			>
				Delete Event
			</Button>
			<Button
				className={classes.button}
				variant="contained"
				color="primary"
				disabled={onCreate ? false : true}
				fullWidth
				onClick={onCreate}
			>
				Create Event
			</Button>
			<Button
				className={classes.button}
				variant="contained"
				color="primary"
				fullWidth
				onClick={() => getEventList(nowDate, weekLaterDate)}
			>
				List event (7)
			</Button>
			<Button
				className={classes.button}
				variant="contained"
				color="primary"
				fullWidth
				onClick={() => getEventList(nowDate, days30LaterDate)}
			>
				List event (30)
			</Button>
			<Button
				className={classes.button}
				variant="contained"
				color="primary"
				disabled={onList1 ? false : true}
				fullWidth
				onClick={onList1}
			>
				List event (1)
			</Button>
			<Button
				className={classes.button}
				variant="contained"
				color="primary"
				fullWidth
				onClick={handleSignOut}
			>
				Sign out
			</Button>
			<RedirectButton url={"/calendar"}>
				Redirect to Calendar Page
			</RedirectButton>
			<div>
				<p>Start of day: {startOfDayISO()}</p>
				<p>End of day: {endOfDayISO()}</p>
				<p>Weekday: {weekdayFromISO(DateTime.now())}</p>
				<p>Week number: {weekNumberFromISO(DateTime.now())}</p>
				{/* {console.log(filterByViewType(eventList, 7))} */}
				{/* {console.log(filterByViewType(longEventList, 30))} */}
				{/* {console.log(chunkEventsByViewType(eventList, 1))} */}
				{/* {console.log(chunkEventsByViewType(eventList, 7))} */}
				{/* {console.log(chunkEventsByViewType(eventList, 52))} */}
			</div>
			<RedirectButton url={"/"}>Redirect to Login Page</RedirectButton>
		</Card>
	);
}

EventPanel.propTypes = {
	position: PropTypes.string,
};

EventPanel.defaultProps = {
	position: "topLeft",
};

export default EventPanel;
