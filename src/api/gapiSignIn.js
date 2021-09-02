import history from "../history";

const gapiSignIn = () => {
	// Sign in
	window.gapi.auth2
		.getAuthInstance()
		.signIn()
		.then(() => {
			console.log("Signed in");
			history.push("/calendar");
		});
};

export default gapiSignIn;
