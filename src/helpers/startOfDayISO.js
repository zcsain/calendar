import { DateTime } from "luxon";

/**
 *
 * @param {DateTime} date Luxon DateTime
 * @returns Start of day (ISO), ex. "2021-09-02T00:00:00.000+02:00"
 */

const startOfDayISO = (date = DateTime.now()) => {
	try {
		if (DateTime.isDateTime(date)) {
			return date.startOf("day").toISO();
		} else {
			throw new Error("date is not an instance of 'Date'");
		}
	} catch (error) {
		console.log(error.name, error.message);
	}
};

export default startOfDayISO;
