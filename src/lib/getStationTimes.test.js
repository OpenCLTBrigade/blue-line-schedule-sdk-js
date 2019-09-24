import getStationTimes from './getStationTimes';
const constants = require('lynx-schedule-json/output/constants');

test('Retrieves Parkwood Station times', () => {
  const { DIRECTION_KEY_OUTBOUND, TIME_KEY_SATURDAY, STATION_PARKWOOD_STATION } = constants;
  const result = getStationTimes(TIME_KEY_SATURDAY, DIRECTION_KEY_OUTBOUND, STATION_PARKWOOD_STATION);
  expect(result).toContain('9:36 PM');
});
