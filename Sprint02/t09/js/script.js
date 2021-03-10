function format(date) {
    return (date.toString().length === 1) ? String('0' + date) : date;
}
function getFormattedDate(date) {
    let arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday"];
    return `${format(date.getDate())}.${format(date.getMonth() + 1)}.${date.getFullYear()} ${format(date.getHours())}:${format(date.getMinutes())} ${arr[date.getDay()]}`;
}
// const date0= new Date(1993, 11, 1);
// const date1= new Date(1998, 0, -33);
// const date2= new Date('42 03:24:00');
// console.log(getFormattedDate(date0));// 01.12.1993 00:00 Wednesday
// console.log(getFormattedDate(date1));// 28.11.1997 00:00 Friday
// console.log(getFormattedDate(date2));// 01.01.2042 03:24 Wednesday