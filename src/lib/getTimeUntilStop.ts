/**
 * Currently defaults to getting the amount of minutes until the next stop
 * @param stopDate
 * @param currentDate
 */
export const getTimeUntilStop = (stopDate: Date, currentDate: Date = new Date(), unit: number = 60000): number => {
  const difference = stopDate.getTime() - currentDate.getTime();
  return Math.round(difference / unit);
};

export default getTimeUntilStop;
