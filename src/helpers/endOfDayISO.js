import { DateTime } from "luxon";

/**
 *
 * @param {DateTime} date Luxon DateTime
 * @returns Start of day (ISO), ex. "2021-09-02T23:59:59.999+02:00"
 */

const endOfDayISO = (date = DateTime.now()) => {
	try {
		if (DateTime.isDateTime(date)) {
			return date.endOf("day").toISO();
		} else {
			throw new Error("date is not an instance of 'Date'");
		}
	} catch (error) {
		console.log(error.name, error.message);
	}
};

export default endOfDayISO;
