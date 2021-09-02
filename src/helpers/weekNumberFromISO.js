import { DateTime } from "luxon";

/**
 *
 * @param {string} dateISO Date time string in ISO format
 * @returns Week number, 1-52
 */

const weekNumberFromISO = (dateISO) => {
	return DateTime.fromISO(dateISO).weekNumber;
};

export default weekNumberFromISO;
