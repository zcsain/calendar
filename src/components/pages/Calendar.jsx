import React from "react";

// Custom
import RedirectButton from "../dev_elements/RedirectButton";
import BottomFixedButton from "../elements/BottomFixedButton";

// Material UI
import AddIcon from "@material-ui/icons/Add";

const handleBottomButtonClick = () => {
	window.alert("BottomFixedButton from Calendar!");
};

function Calendar() {
	return (
		<div>
			<p style={{ backgroundColor: "lightcoral" }}>
				I am calendar fear me more!!!
			</p>
			<RedirectButton url={"/"}>Redirect to Login Page</RedirectButton>
			<BottomFixedButton icon={<AddIcon />} onClick={handleBottomButtonClick}>
				Event
			</BottomFixedButton>
		</div>
	);
}

export default Calendar;
