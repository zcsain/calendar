import React from "react";

// Custom components
import Event from "./Event";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

// Misc
import eventList from "../../mockdata/eventList";

const useStyles = makeStyles((theme) => ({
	demo: {
		backgroundColor: theme.palette.background.paper,
	},
}));

function EventList() {
	const classes = useStyles();

	// Dev var!
	const events = eventList;

	return (
		<div className={classes.demo}>
			<List dense>
				{events.map((event) => {
					const { id, summary, start, end } = event;
					const { dateTime: startDateISO } = start;
					const { dateTime: endDateISO } = end;

					return (
						<Event
							key={id}
							title={summary}
							id={id}
							startDate={startDateISO}
							endDate={endDateISO}
						/>
					);
				})}
			</List>
		</div>
	);
}

export default EventList;
