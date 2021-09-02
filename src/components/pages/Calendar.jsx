import React from "react";

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

function Calendar() {
	const classes = useStyles();

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
			{/* Dev component */}
			<EventPanel position={"topLeft"} />
		</div>
	);
}

export default Calendar;
