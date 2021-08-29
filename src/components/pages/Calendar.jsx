import React from "react";

// Custom
import RedirectButton from "../dev_elements/RedirectButton";

function Calendar() {
	return (
		<div>
			<p style={{ backgroundColor: "lightcoral" }}>
				I am calendar fear me more!!!
			</p>
			<RedirectButton url={"/"}>Redirect to Login Page</RedirectButton>
		</div>
	);
}

export default Calendar;
