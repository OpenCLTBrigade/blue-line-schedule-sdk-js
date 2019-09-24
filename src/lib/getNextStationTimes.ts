import getStationTimesForDate from './getStationTimesForDate';
const scheduleData = require('lynx-schedule-json/output/schedule.json');

const getDatePieces = (date: Date, dayOffset: number = 0) => [
  date.getFullYear(),
  date.getMonth() + 1,
  date.getDate() + dayOffset
];

const filterStationTimes = (stationTimes: string[], date: Date) => {
  const [year, month, day] = getDatePieces(date);
  return stationTimes.filter((time) => {
    return new Date(`${year}-${month}-${day} ${time}`) >= date;
  });
};

const getStationTimesForNextDay = (stationName: string, directionKey: string, date: Date): string[] => {
  const [year, month, day] = getDatePieces(date, 1);
  return getStationTimesForDate(stationName, directionKey, new Date(`${year}-${month}-${day}`));
};

const getNextStationTimes = (stationName: string, directionKey: string, date: Date): string[] => {
  const stationTimes = getStationTimesForDate(stationName, directionKey, date);

  if (stationTimes === null) {
    return null;
  }

  const filteredStationTimes = filterStationTimes(stationTimes, date);

  if (filteredStationTimes.length > 0) {
    return filteredStationTimes;
  }

  // No remaining times for this day. Get the next stops for tomorrow.
  return getStationTimesForNextDay(stationName, directionKey, date);
};

export default getNextStationTimes;
