export const getStopAsDate = (stopTime: string, date: Date = new Date()): Date => {
  const currentDateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  const stopDate = new Date(`${currentDateString} ${stopTime}`);

  // In case we get a post-midnight train as the next one
  if (date.getHours() > stopDate.getHours()) {
    stopDate.setDate(stopDate.getDate() + 1);
  }

  return stopDate;
};

export default getStopAsDate;
