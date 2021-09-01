import React from "react";
import PropTypes from "prop-types";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles((theme) => ({
	rootRight: {
		position: "fixed",
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	},
	rootLeft: {
		position: "fixed",
		bottom: theme.spacing(2),
		left: theme.spacing(2),
	},
	extendedIcon: {
		marginRight: theme.spacing(1),
		marginTop: theme.spacing(0.5),
	},
}));

// Renders a button with and icon, that is fixed to the bottom of the window,
// left or right fixed positoin can be chosen.

function BottomFixedButton({ icon, children, onClick, position, color }) {
	const classes = useStyles();

	return (
		<div className={position === "left" ? classes.rootLeft : classes.rootRight}>
			<Fab variant="extended" color={color} onClick={onClick}>
				<span className={classes.extendedIcon}>{icon}</span>
				{children}
			</Fab>
		</div>
	);
}

BottomFixedButton.propTypes = {
	position: PropTypes.string,
	color: PropTypes.string,
};

BottomFixedButton.defaultProps = {
	position: "right",
	color: "primary",
};

export default BottomFixedButton;
