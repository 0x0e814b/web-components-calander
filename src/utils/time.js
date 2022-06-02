const getTimezone = (dateString) => {
  const date = parseDate(dateString);
};

const parseDate = (dateValue) => {
  if (!dateValue) {
    throw new Error('no specific date');
  }
  const dateObj = typeof dateValue === 'Date' ? dateValue : new Date(dateValue);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();
  const date = dateObj.getDate();
  const day = dateObj.getDay();
  return {
    base: dateObj,
    year, month, date, day
  }
}

export { getTimezone, parseDate };