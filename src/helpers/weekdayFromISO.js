import { DateTime } from "luxon";

/**
 *
 * @param {string} dateISO Date time string in ISO format
 * @returns Week day, 1-7, Monday is 1, Sunday is 7, per ISO
 */

const weekdayFromISO = (dateISO) => {
	return DateTime.fromISO(dateISO).weekday;
};

export default weekdayFromISO;
