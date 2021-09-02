const gapiCheckSignInStatus = () => {
	return window.gapi.auth2.getAuthInstance().isSignedIn.get();
};

export default gapiCheckSignInStatus;
