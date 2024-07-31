export default function yearsAgo(year) {
  let todaydate = new Date();
  let todayyear = todaydate.getFullYear();
  return todayyear - year;
}