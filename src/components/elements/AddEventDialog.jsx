import React, { useState } from "react";
import { DateTime } from "luxon";

// Custom
import BottomFixedButton from "./BottomFixedButton";
import gapiAddEvent from "../../api/gapiAddEvent";

// Material UI
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import {
	MuiPickersUtilsProvider,
	KeyboardDateTimePicker,
} from "@material-ui/pickers";
import LuxonUtils from "@date-io/luxon";

function AddEventDialog({ resetState }) {
	const [open, setOpen] = useState(false);
	const [startDate, setStartDate] = useState(DateTime.now());
	const [endDate, setEndDate] = useState(DateTime.now().plus({ hours: 1 }));
	const [title, setTitle] = useState("");

	const handleStartDateChange = (date) => {
		setStartDate(date);
	};

	const handleEndDateChange = (date) => {
		setEndDate(date);
	};

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};

	// Open dialog
	const handleClickOpen = () => {
		setOpen(true);

		// Initialize time to current time, title to empty string
		setStartDate(DateTime.now());
		setEndDate(DateTime.now().plus({ hours: 1 }));
		setTitle("");
	};

	// Close dialog
	const handleClose = () => {
		setOpen(false);
	};

	// Add event
	const handleSubmit = () => {
		gapiAddEvent(title, startDate, endDate);

		handleClose();

		if (resetState) {
			resetState();
		}
	};

	// Title input and start/end time pickers
	const displayPickers = () => {
		return (
			<MuiPickersUtilsProvider utils={LuxonUtils}>
				<Grid container justifyContent="center" spacing={2}>
					<Grid item xs={12}>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="Event Title"
							value={title}
							onChange={handleTitleChange}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<KeyboardDateTimePicker
							ampm={false}
							label="Event Start"
							value={startDate}
							onChange={handleStartDateChange}
							disablePast
							format="dd/MM/yyyy HH:mm"
						/>
					</Grid>
					<Grid item xs={12}>
						<KeyboardDateTimePicker
							ampm={false}
							label="Event End"
							value={endDate}
							onChange={handleEndDateChange}
							disablePast
							format="dd/MM/yyyy HH:mm"
						/>
					</Grid>
				</Grid>
			</MuiPickersUtilsProvider>
		);
	};

	return (
		<div>
			<BottomFixedButton
				icon={<AddIcon />}
				color="primary"
				onClick={handleClickOpen}
			>
				Event
			</BottomFixedButton>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">New Event</DialogTitle>
				<DialogContent>{displayPickers()}</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleSubmit} color="primary">
						Add
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default AddEventDialog;
