import history from "../history";

const gapiSignIn = (onSignInChange) => {
	// Sign in
	window.gapi.auth2
		.getAuthInstance()
		.signIn()
		.then(() => {
			// Set sign in state
			onSignInChange();

			console.log("Signed in v2");

			// Redirect to calendar page
			history.push("/calendar");
		});
};

export default gapiSignIn;
