import { DateTime } from "luxon";

/**
 *
 * @param {string} isoDate ISO date-time string
 * @returns Time in format: "13:37"
 */

const isoToHoursMinutes = (isoDate) => {
	return DateTime.fromISO(isoDate).toLocaleString(DateTime.TIME_24_SIMPLE);
};

export default isoToHoursMinutes;
