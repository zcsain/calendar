// Helpers
import weekdayFromISO from "./weekdayFromISO";
import weekNumberFromISO from "./weekNumberFromISO";

/**
 *
 * @param {array} events An array of events from Google API (events are ordered by start time)
 * @param {number} viewType Number coresponding to the type of view (views: (1, 7, 30), view types: (1, 7, 52))
 * @returns Array of arrays, where each interanl array contains events from one day (or one week)
 */

const chunkEventsByViewType = (events, viewType) => {
	// If we are showing just one day chunking is not required
	if (viewType === 1) {
		return [events];
	}

	// Array to hold day or week arrays
	let chunked = [];

	// Day or week to start counting from
	let start;

	// Flag
	let flag = true;

	if (viewType === 7) {
		// Grab the starting day from the first event
		start = weekdayFromISO(events[0].start.dateTime);
	} else if (viewType === 52) {
		// Grab the starting week from the first event
		start = weekNumberFromISO(events[0].start.dateTime);
	}

	// Track which days (or weeks) have been chunked
	let index = start - 1;

	while (index !== start || flag) {
		let eventIndex;

		// Advance tracker without going over "viewType" value
		index = (index % viewType) + 1;

		// ...
		if (index === start + 1) {
			flag = false;
		}

		// Filter events according to weekday (or week number)
		let chunk = events.filter((event) => {
			if (viewType === 7) {
				// Grab weekday from event
				eventIndex = weekdayFromISO(event.start.dateTime);
			} else if (viewType === 52) {
				// Grab week number from event
				eventIndex = weekNumberFromISO(event.start.dateTime);
			}

			return eventIndex === index;
		});

		// Store chunked events
		chunked.push(chunk);

		// If array of arrays "chunked" has the same lenght as "viewType"
		// (7 or 52), increment the tracker so days (or weeks) are not repeated
		if (chunked.length === viewType) {
			index += 1;
		}
	}

	return chunked;
};

export default chunkEventsByViewType;
