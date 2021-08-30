/**
 *
 * @param {Date} date Date time object
 * @returns ISO string representation of date
 */

const dateToISO = (date) => {
	if (date instanceof Date) {
		return date.toISOString();
	} else {
		throw "Date is not an instance of 'Date'";
	}
};

export default dateToISO;
