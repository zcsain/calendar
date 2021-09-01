const deleteEvent = (id) => {
	window.gapi.client.calendar.events
		.delete({
			calendarId: "primary",
			eventId: id,
			sendUpdates: "all",
		})
		.then((response) => {
			console.log(response);
			console.log("Event deleted");
		});
};

export default deleteEvent;
