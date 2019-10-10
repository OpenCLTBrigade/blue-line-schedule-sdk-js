import getStopAsDate from './getStopAsDate';

test('Convert the stop time to a valid date object', () => {
  const stopString = '12:02 PM';
  const currentDate = new Date('2019-10-04');
  const result = getStopAsDate(stopString, currentDate);
  expect(result).toStrictEqual(new Date('2019-10-04 12:02:00'));
});
