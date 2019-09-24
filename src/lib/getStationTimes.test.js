import getStationTimes from './getStationTimes';
import { TIME_KEY_WEEKDAY } from 'lynx-schedule-json/output/constants';
const constants = require('lynx-schedule-json/output/constants');

test('Retrieves Parkwood Station times', () => {
  const { DIRECTION_KEY_OUTBOUND, TIME_KEY_SATURDAY, STATION_PARKWOOD_STATION } = constants;
  const result = getStationTimes(TIME_KEY_SATURDAY, DIRECTION_KEY_OUTBOUND, STATION_PARKWOOD_STATION);
  expect(result[1]).toContain('12:36 AM');
});

test('Fail somewhat gracefully', () => {
  const { TIME_KEY_SUNDAY, DIRECTION_KEY_OUTBOUND, STATION_PARKWOOD_STATION } = constants;
  expect(getStationTimes('wrong value!', DIRECTION_KEY_OUTBOUND, STATION_PARKWOOD_STATION)).toStrictEqual([]);
  expect(getStationTimes(TIME_KEY_SUNDAY, 'wrong value!', STATION_PARKWOOD_STATION)).toStrictEqual([]);
  expect(getStationTimes(TIME_KEY_WEEKDAY, DIRECTION_KEY_OUTBOUND, 'Wrong value!')).toStrictEqual([]);
});
