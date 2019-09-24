const scheduleData = require('lynx-schedule-json/output/schedule.json');

export const getStationTimes = (timeKey: string, directionKey: string, stationName: string) => {
  const dataSet =
    scheduleData[timeKey] && scheduleData[timeKey][directionKey] ? scheduleData[timeKey][directionKey] : null;

  if (dataSet === null) {
    return [];
  }

  const result = dataSet.find((record) => record.station.Key === stationName);
  return result ? result.stationStops : [];
};

export default getStationTimes;
