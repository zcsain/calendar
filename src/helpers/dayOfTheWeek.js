import { DateTime } from "luxon";

/**
 *
 * @param {string} dateISO ISO date-time string
 * @returns Day of the week, ex. "Monday"
 */

function dayOfTheWeek(dateISO) {
	return DateTime.fromISO(dateISO).toFormat("cccc");
}

export default dayOfTheWeek;
