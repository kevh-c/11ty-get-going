import { DateTime } from "luxon";

// Add ordinal suffix to day
const addSuffix = i => {
	const s = ["th", "st", "nd", "rd"];
	const v = i % 100;
	return i + (s[(v - 20) % 10] || s[v] || s[0]);
};

// Return day/month/year (with suffix)
export const dateToDMY = i => {
	const getDay = DateTime.fromJSDate(i).toFormat("d").toString();
	const getDayWithSuffix = addSuffix(getDay);
	const getMonth = DateTime.fromJSDate(i).toFormat("LLLL").toString();
	const getYear = DateTime.fromJSDate(i).toFormat("y").toString();
	return `${getDayWithSuffix} ${getMonth} ${getYear}`;
};

// Return time
export const dateToTime = i => {
	return DateTime.fromJSDate(i).toFormat("HH':'mm").toString();
};

// Return just year
export const dateToYear = i => {
	return DateTime.fromJSDate(i).toFormat("y").toString();
};

// Return just month
export const dateToMonth = i => {
	return DateTime.fromJSDate(i).toFormat("LL").toString();
};

// Return UNIX
export const dateToUNIX = i => {
	return DateTime.fromJSDate(i).toFormat("x").toString();
};
