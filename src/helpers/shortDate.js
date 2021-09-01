import { DateTime } from "luxon";

/**
 *
 * @param {string} dateISO ISO date-time string
 * @returns Formatted date, ex. "Aug 6, 2014"
 */

function shortDate(dateISO) {
	return DateTime.fromISO(dateISO).toFormat("DD");
}

export default shortDate;
