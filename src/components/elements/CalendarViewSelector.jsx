import React, { useState } from "react";

// Custom
import BottomFixedButton from "./BottomFixedButton";

// Material UI
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

// Renders a button to select different types of view for the calendar
// (1 day, 7 days and 30 days views available)
function CalendarViewSelector({ setSelectedCount }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const [selectedView, setSelectedView] = useState(1);
	const viewNameList = ["1 day", "7 days", "30 days"];
	const countList = [1, 7, 30];

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleItemClick = (event, index) => {
		setSelectedView(index);
		setSelectedCount(countList[index]);

		handleClose();
	};

	return (
		<div>
			<BottomFixedButton
				onClick={handleClick}
				position="left"
				icon={<ExpandMoreIcon />}
			>
				{viewNameList[selectedView]}
			</BottomFixedButton>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{viewNameList.map((item, index) => {
					return (
						<MenuItem
							key={item}
							onClick={(event) => handleItemClick(event, index)}
							selected={index === selectedView}
						>
							{item}
						</MenuItem>
					);
				})}
			</Menu>
		</div>
	);
}

export default CalendarViewSelector;
