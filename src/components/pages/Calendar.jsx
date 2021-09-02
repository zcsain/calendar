import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

// Custom components
import EventList from "../elements/EventList";
import AddEventDialog from "../elements/AddEventDialog";

// Dev components
import EventPanel from "../dev_elements/EventPanel";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

// Mock data
import eventList from "../../mockdata/eventList";

const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: theme.spacing(3),
	},
}));

function Calendar({ signInStatus }) {
	const classes = useStyles();
	const history = useHistory();
	const [count, setCount] = useState();

	useEffect(() => {
		if (signInStatus) {
			// Load data according to count
		} else {
			history.push("/");
		}
	});

	return (
		<div>
			<Container className={classes.container}>
				<Grid container spacing={3} justifyContent="center">
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<EventList events={eventList} />
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<EventList events={eventList} />
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<EventList events={eventList} />
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<EventList events={eventList} />
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<EventList events={eventList} />
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<EventList events={eventList} />
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<EventList events={eventList} />
					</Grid>
				</Grid>
			</Container>
			<AddEventDialog />
		</div>
	);
}

export default Calendar;
