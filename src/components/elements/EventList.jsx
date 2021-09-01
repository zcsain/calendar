import React from "react";

// Custom components
import Event from "./Event";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

// Helpers
import dayOfTheWeek from "../../helpers/dayOfTheWeek";
import shortDate from "../../helpers/shortDate";

const useStyles = makeStyles((theme) => ({
	card: {
		backgroundColor: theme.palette.background.paper,
		borderRadius: theme.spacing(1),
	},
	list: {
		overflow: "auto",
		maxHeight: 410,
	},
	day: {
		padding: theme.spacing(1, 2, 1),
		backgroundColor: theme.palette.primary.main,
		color: "white",
	},
}));

function EventList({ events }) {
	const classes = useStyles();
	const day = dayOfTheWeek(events[0].start.dateTime);
	const date = shortDate(events[0].start.dateTime);

	return (
		<Card className={classes.card} raised>
			<Typography variant="h6" className={classes.day}>
				{day + " - " + date}
			</Typography>
			<List className={classes.list} dense>
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
		</Card>
	);
}

export default EventList;
