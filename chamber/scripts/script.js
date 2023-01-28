//Display Current Time
const time = new Date();
const day = time.getDay();
const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
let dayname = days[day]
let month = time.getMonth()+1;
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

let monthname = months[month]
const year = time.getFullYear();
const fulltime = `${dayname}, ${day} ${monthname} ${year}`;
console.log(fulltime);
document.querySelector("#currentdate").textContent =fulltime;


