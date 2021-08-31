import React from "react";
import { DateTime, toISODate } from "luxon";

// Helpers
import isoToHoursMinutes from "../../helpers/isoToHoursMinutes";

// Material UI
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EventIcon from "@material-ui/icons/Event";
import Avatar from "@material-ui/core/Avatar";

function Event({ title, id, startDate, endDate }) {
	const startTime = isoToHoursMinutes(startDate);
	const endTime = isoToHoursMinutes(endDate);

	console.log(typeof toISODate);

	const handleDelete = (id) => {
		console.log(`Delete from event with id: ${id}`);
	};

	return (
		<ListItem>
			<ListItemAvatar>
				<Avatar>
					<EventIcon />
				</Avatar>
			</ListItemAvatar>
			<ListItemText primary={title} secondary={startTime + " - " + endTime} />
			<ListItemSecondaryAction>
				<IconButton
					edge="end"
					arial-label="delete"
					onClick={() => handleDelete(id)}
				>
					<DeleteIcon />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
}

export default Event;
