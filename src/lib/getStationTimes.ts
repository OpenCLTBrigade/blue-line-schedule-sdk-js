const scheduleData = require('lynx-schedule-json/output/schedule.json');

export const getStationTimes = (timeKey: string, directionKey: string, stationName: string) => {
  return scheduleData[timeKey][directionKey].find((record) => record.station.Key === stationName).stationStops;
}

export default getStationTimes;