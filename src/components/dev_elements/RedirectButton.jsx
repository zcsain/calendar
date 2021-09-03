import React from "react";
import { useHistory } from "react-router-dom";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
	button: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(1),
		borderRadius: theme.spacing(1),
	},
}));

function RedirectButton({ url, children }) {
	const classes = useStyles();
	let history = useHistory();

	const handleHistory = (url) => {
		history.push(url);
	};

	return (
		<Button
			className={classes.button}
			variant="contained"
			color="secondary"
			fullWidth
			onClick={() => handleHistory(url)}
		>
			{children}
		</Button>
	);
}

export default RedirectButton;
