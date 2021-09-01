import React, { useState } from "react";
import { DateTime } from "luxon";

// Custom
import BottomFixedButton from "./BottomFixedButton";

// Helpers
import dateToISO from "../../helpers/dateToISO";

// Material UI
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
	DateTimePicker,
	KeyboardDateTimePicker,
} from "@material-ui/pickers";
import LuxonUtils from "@date-io/luxon";

function AddEventDialog() {
	const [open, setOpen] = useState(false);
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const handleStartDateChange = (date) => {
		setStartDate(date);
		console.log(dateToISO(startDate));
	};

	const handleEndDateChange = (date) => {
		setEndDate(date);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

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
							type="text"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<KeyboardDateTimePicker
							ampm={false}
							label="Event Start"
							value={startDate}
							onChange={handleStartDateChange}
							onError={console.log}
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
							onError={console.log}
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
				color="secondary"
				onClick={handleClickOpen}
			>
				Event
			</BottomFixedButton>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Add New Event</DialogTitle>
				<DialogContent>
					{/* <TextField
						autoFocus
						margin="dense"
						id="name"
						label="Title"
						type="text"
						fullWidth
					/> */}
					{displayPickers()}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleClose} color="primary">
						Add
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default AddEventDialog;
