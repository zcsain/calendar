import React from "react";

// Custom components
import SignInCard from "../elements/SignInCard";

// Material UI
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

// Api
import gapiSignIn from "../../api/gapiSignIn";
import gapiSignInV2 from "../../api/gapiSignInV2";

const useStyles = makeStyles((theme) => ({
	// Center items in container vertically and horizontally
	container: {
		display: "flex",
		width: "100vw",
		height: "100vh",
		alignItems: "center",
	},
}));

function SignIn({ onSignInChange }) {
	const classes = useStyles();

	const handleSignIn = () => {
		// gapiSignIn();
		gapiSignInV2(onSignInChange);
	};

	return (
		<Container className={classes.container} maxWidth="xs">
			<SignInCard
				description="To access your calendar sign in using your Google account"
				title={"Sign in"}
				buttonText={"Sign in with google"}
				onButtonClick={handleSignIn}
			/>
		</Container>
	);
}

export default SignIn;
