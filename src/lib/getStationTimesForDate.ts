import {
  DIRECTION_KEY_INBOUND,
  DIRECTION_KEY_OUTBOUND,
  TIME_KEY_SATURDAY,
  TIME_KEY_SUNDAY,
  TIME_KEY_WEEKDAY
  } from 'lynx-schedule-json/output/constants';
import getStationTimes from './getStationTimes';

const scheduleData = require('lynx-schedule-json/output/schedule.json');

export const getTimeKey = (date: Date) => {
  const dayIndex = date.getDay();
  return dayIndex === 0 ? TIME_KEY_SUNDAY : dayIndex === 6 ? TIME_KEY_SATURDAY : TIME_KEY_WEEKDAY;
};

export const getStationTimesForDate = (stationName: string, directionKey: string, date: Date) => {
  const timeKey = getTimeKey(date);
  const stationData = getStationTimes(timeKey, directionKey, stationName);
  return stationData;
};

export default getStationTimesForDate;
