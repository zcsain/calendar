import React from "react";

// Custom
import RedirectButton from "../dev_elements/RedirectButton";

// Material UI
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import EventNoteIcon from "@material-ui/icons/EventNote";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
	card: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		borderRadius: theme.spacing(1),
		padding: theme.spacing(2),
	},
	avatar: {
		marginTop: theme.spacing(2),
		backgroundColor: theme.palette.primary.main,
	},
	display: {
		margin: theme.spacing(2),
	},
	button: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(1),
		borderRadius: theme.spacing(1),
	},
	description: {
		backgroundColor: "rgba(211, 211, 211, 0.35)",
		padding: theme.spacing(1.5),
		borderRadius: theme.spacing(1),
	},
	title: {
		margin: theme.spacing(2, 0, 4, 0),
	},
}));

function LoginCard({ title, description, buttonText, onButtonClick }) {
	const classes = useStyles();

	return (
		<Card className={classes.card} raised>
			<Avatar className={classes.avatar}>
				<EventNoteIcon />
			</Avatar>
			<Typography className={classes.title} component="h1" variant="h5">
				{title}
			</Typography>
			<Typography
				className={classes.description}
				variant="body1"
				align="center"
			>
				{description}
			</Typography>
			<Button
				className={classes.button}
				variant="contained"
				color="primary"
				fullWidth
				onClick={onButtonClick}
			>
				{buttonText}
			</Button>
			<RedirectButton url={"/calendar"}>
				Redirect to Calendar Page
			</RedirectButton>
		</Card>
	);
}

export default LoginCard;
