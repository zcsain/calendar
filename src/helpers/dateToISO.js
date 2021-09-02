import { DateTime } from "luxon";

/**
 *
 * @param {Date} date Date time object
 * @returns ISO string representation of date
 */

const dateToISO = (date) => {
	try {
		if (DateTime.isDateTime(date)) {
			return date.toISO();
		} else {
			throw new Error("date is not an instance of 'Date'");
		}
	} catch (error) {
		console.log(error.name, error.message);
	}
};

export default dateToISO;
