import React from "react";

// Custom components
import RedirectButton from "../dev_elements/RedirectButton";
import BottomFixedButton from "../elements/BottomFixedButton";
import EventList from "../elements/EventList";

// Dev components
import EventPanel from "../dev_elements/EventPanel";

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
			<EventList />

			{/* Dev component */}
			<EventPanel position={"bottomLeft"} />
		</div>
	);
}

export default Calendar;
