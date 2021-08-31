// Hide keys/ids in .env so they can be ignored when pushing to GitHub
// Keys/ids should be on server side code, not client side code.
// "REACT_APP_" prefix required for React to detect variables in .env files
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const API_KEY = process.env.REACT_APP_API_KEY;

// Array of API discovery doc URLs for APIs
const DISCOVERY_DOCS = [
	"https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES =
	"https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar";

const GAPI_CLIENT_CONFIG = {
	apiKey: API_KEY,
	clientId: CLIENT_ID,
	discoveryDocs: DISCOVERY_DOCS,
	scope: SCOPES,
};

export default GAPI_CLIENT_CONFIG;
