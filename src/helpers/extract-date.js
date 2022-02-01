const extractDate = (date) => {
  return {
    date: {
      month: date.getMonth(),
      day: date.getDay(),
      year: date.getFullYear(),
    },
    time: {
      hours: date.getHours(),
      minutes: date.getMinutes(),
    },
  };
};

export default extractDate;
