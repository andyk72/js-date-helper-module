/**
 * nextDayOfWeek module
 * Provides date handling high level functionalities on top of momentjs
 * 
 * @exported constants
 * 
 *  DAYS_OF_WEEK {Object}
 * 
 * @exported functions
 * 
 *  dateFormat(date, format = DATE_FORMAT)
 *  nextDayOfWeek(dayOfWeek = 0, date = new Date())
 *  nextSunday(date = new Date())
 *  nextMonday(date = new Date())
 *  nextTuesday(date = new Date())
 *  nextWednesday(date = new Date())
 *  nextThursday(date = new Date())
 *  nextFriday(date = new Date())
 *  nextSaturday(date = new Date())
 * 
 * @dependencies
 * 
 *  momentjs (https://momentjs.com/)
 */

import moment from 'moment';

const DATE_FORMAT = 'DD/MM/YYYY';

export const DAYS_OF_WEEK = {
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6
};

/**
 * Returns the formatted string representation of date, as defined by format
 * @param {Date|Moment} date 
 * @param {String} format
 * @usage
 *  const formatted = dateFormat(nextFriday());
 *  const formatted = dateFormat(new Date('2020-11-23'))
 *  const formatted = dateFormat(nextSaturday(), 'MM.DD.YYYY')
 */
export const dateFormat = (date, format = DATE_FORMAT) => {
  return moment(date).format(format);
};

/**
 * Returns the next day of week (i.e., next sunday, next monday, etc..)
 * @param dayOfWeek {Number|String}
 *  [0|1|2|3|4|5|6]
 *  ['sunday'|'monday'|'tuesday'|'wednesday'|'thursday'|'friday'|'saturday']
 *  Defaults to 0 (Sunday)
 * @param date {Date}
 *  Defaults to today
 * @usage
 *  const nextSunday = nextDayOfWeek()
 *  const nextWednesay = nextDayOfWeek('wednesday')
 *  const nextFridayAfterSomeDate = nextDayOfWeek('friday', new Date('2020-07-05'))
 */
export const nextDayOfWeek = (dayOfWeek = 0, date = new Date()) => {
  
  if (typeof(dayOfWeek) === 'string') {
    dayOfWeek = DAYS_OF_WEEK[dayOfWeek.toUpperCase()];
  }

  if (dayOfWeek < 0 || dayOfWeek > 6) {
    throw 'Invalid day of week ' + dayOfWeek;
  }
  
  const daysDiff = (dayOfWeek + (7 - date.getDay())) % 7;
  const newDate = moment(date).add(daysDiff, 'day');
  return newDate;

};

/**
 * Returns the next Sunday, relative to date
 * @param {Date} date
 * @return {Moment}
 * @usage
 *  const nextSunday = nextSunday()
 *  const nextSundayAfterSomeDate = nextSunday(new Date('2020-07-05'))
 */
export const nextSunday = (date = new Date()) => {
  return nextDayOfWeek(DAYS_OF_WEEK.SUNDAY, date);
};

/**
 * Returns the next Monday, relative to date
 * @param {Date} date
 * @return {Moment}
 */
export const nextMonday = (date = new Date()) => {
  return nextDayOfWeek(DAYS_OF_WEEK.MONDAY, date);
};

/**
 * Returns the next Tuesday, relative to date
 * @param {Date} date
 * @return {Moment}
 */
export const nextTuesday = (date = new Date()) => {
  return nextDayOfWeek(DAYS_OF_WEEK.TUESDAY, date);
};

/**
 * Returns the next Wednesday, relative to date
 * @param {Date} date
 * @return {Moment}
 */
export const nextWednesday = (date = new Date()) => {
  return nextDayOfWeek(DAYS_OF_WEEK.WEDNESDAY, date);
};

/**
 * Returns the next Thursday, relative to date
 * @param {Date} date
 * @return {Moment}
 */
export const nextThursday = (date = new Date()) => {
  return nextDayOfWeek(DAYS_OF_WEEK.THURSDAY, date);
};

/**
 * Returns the next Friday, relative to date
 * @param {Date} date
 * @return {Moment}
 */
export const nextFriday = (date = new Date()) => {
  return nextDayOfWeek(DAYS_OF_WEEK.FRIDAY, date);
};

/**
 * Returns the next Saturday, relative to date
 * @param {Date} date
 * @return {Moment}
 */
export const nextSaturday = (date = new Date()) => {
  return nextDayOfWeek(DAYS_OF_WEEK.SATURDAY, date);
};