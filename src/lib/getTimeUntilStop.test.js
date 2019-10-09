import getTimeUntilStop from './getTimeUntilStop';

test('Make sure it gives us the right time until the next stop (2 min)', () => {
  const stopDate = new Date('2019-05-04 12:02:00');
  const currentDate = new Date('2019-05-04 11:59:32');
  const result = getTimeUntilStop(stopDate, currentDate);
  expect(result).toBe(2);
});

test('Make sure it gives us the right time until the next stop (3 min)', () => {
  const stopDate = new Date('2019-05-04 12:02:00');
  const currentDate = new Date('2019-05-04 11:59:29');
  const result = getTimeUntilStop(stopDate, currentDate);
  expect(result).toBe(3);
});
