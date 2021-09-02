/**
 *
 * @param {function} setSignInState Callback function to set sing in state
 */

const gapiSignOut = (setSignInState = false) => {
	window.gapi.auth2
		.getAuthInstance()
		.signOut()
		.then(() => {
			if (setSignInState) {
				setSignInState();
			}

			console.log("Signed out");
		});
};

export default gapiSignOut;
