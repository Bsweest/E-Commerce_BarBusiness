const GetFullDateTime = (date: Date, time: string) => {
  let date_string =
    date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();

  date_string = date_string + ' ' + time;

  return new Date(date_string);
};

export default GetFullDateTime;
