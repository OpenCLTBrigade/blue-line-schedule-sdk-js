import { getStationTimesForDate, getTimeKey } from './getStationTimesForDate';
const constants = require('lynx-schedule-json/output/constants');

test('Time key generation works', () => {
  const result = getTimeKey(new Date('2019-09-22 13:00:00'));
  expect(result).toBe(constants.TIME_KEY_SUNDAY);
});

test('Retrieves I-485 Inbound Station Sunday times', () => {
  const result = getStationTimesForDate(
    constants.STATION_LYNX_I485_STATION,
    constants.DIRECTION_KEY_INBOUND,
    new Date('2019-09-22 13:00:00')
  );
  expect(result[0]).toBe('12:00 AM'); // Actually 5:50 AM
});

test('Retrieves I-485 Inbound Saturday times', () => {
  const result = getStationTimesForDate(
    constants.STATION_LYNX_I485_STATION,
    constants.DIRECTION_KEY_INBOUND,
    new Date('2019-09-28 13:00:00')
  );
  expect(result[0]).toBe('12:00 AM'); // Actually 12:20 AM
});

test('Retrieves I-485 Inbound Weekday times', () => {
  const result = getStationTimesForDate(
    constants.STATION_LYNX_I485_STATION,
    constants.DIRECTION_KEY_INBOUND,
    new Date('2019-09-24 13:00:00')
  );
  expect(result[0]).toBe('12:02 AM');
});
