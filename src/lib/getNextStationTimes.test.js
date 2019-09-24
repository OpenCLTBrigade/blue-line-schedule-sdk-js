import getNextStationTimes from './getNextStationTimes';
const constants = require('lynx-schedule-json/output/constants');

test('Retrieves next station time mid-day', () => {
  const result = getNextStationTimes(
    constants.STATION_LYNX_I485_STATION,
    constants.DIRECTION_KEY_INBOUND,
    new Date('2019-09-24 13:00:00')
  );
  expect(result[1]).toBe('1:15 PM');
});

test('Gets first Saturday AM train if past last Friday night train', () => {
  const result = getNextStationTimes(
    constants.STATION_LYNX_I485_STATION,
    constants.DIRECTION_KEY_INBOUND,
    new Date('2019-09-27 11:50 PM')
  );
  console.log(new Date('2019-09-27 11:50 PM'));
  expect(result[0]).toBe('12:20 AM');
});
