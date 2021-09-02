import GAPI_CLIENT_CONFIG from "./gapiClientConfig";

const gapiClientInitialization = ({ handleSetState }) => {
	const gapi = window.gapi;

	// Load auth2 client
	gapi.load("client:auth2", () => {
		console.log("Loaded client");

		// Initialize Google API client
		gapi.client.init(GAPI_CLIENT_CONFIG);

		gapi.client.load("calendar", "v3", () => console.log("Loaded calendar v3"));
	});
};

export default gapiClientInitialization;
