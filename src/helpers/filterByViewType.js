// Helpers
import weekDayFromISO from "../helpers/weekdayFromISO";
import weekNumberFromISO from "../helpers/weekNumberFromISO";

/**
 *
 * @param {array} events Array of event objects from Google Calendar API
 * @param {number} viewType Number coresponding to calendar view type (1, 7 or 30)
 * @returns {object} Objct that has weekdys (or week numbers) as keys, each key has an array of events that belong to that weekday (or week number)
 */

const filterByViewType = (events, viewType) => {
	let sortedEvents = {};
	let index = viewType;

	if (viewType === 30) {
		index = 52;
	}

	for (let i = 1; i <= index; i++) {
		sortedEvents[i] = events.filter((event) => {
			let eventIndex = 1;

			if (index === 1 || index === 7) {
				eventIndex = weekDayFromISO(event.start.dateTime);
			} else {
				eventIndex = weekNumberFromISO(event.start.dateTime);
			}

			return eventIndex === i;
		});
	}

	return sortedEvents;
};

export default filterByViewType;
