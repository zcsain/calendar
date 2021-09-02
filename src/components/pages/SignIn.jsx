import React from "react";
import { useHistory } from "react-router-dom";
import { DateTime } from "luxon";

// Custom components
import LoginCard from "../elements/LoginCard";

// Dev components
import EventPanel from "../dev_elements/EventPanel";

// Material UI
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

// Api
import gapiSignIn from "../../api/gapiSignIn";

const useStyles = makeStyles((theme) => ({
	// Center items in container vertically and horizontally
	container: {
		display: "flex",
		width: "100vw",
		height: "100vh",
		// justifyContent: "center",
		alignItems: "center",
	},
}));

function SignIn() {
	const classes = useStyles();

	const handleSignIn = () => {
		gapiSignIn();
	};

	return (
		<Container className={classes.container} maxWidth="xs">
			<LoginCard
				description="To access your calendar sign in using your Google account"
				title={"Sign in"}
				buttonText={"Sign in with google"}
				onButtonClick={handleSignIn}
			/>
			<EventPanel />
		</Container>
	);
}

export default SignIn;
