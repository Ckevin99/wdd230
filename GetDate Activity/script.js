
//const date = new Date();
//console.log(date);
//let day = date.getDay();
//day++;
//console.log(day)
//let month = date.getMonth();
//console.log(month)
//month++;

//const year = date.getFullYear();

//console.log(year)
//const fulldate = `${day}\\${month}\\${year}`;
//console.log(fulldate)
//document.querySelector("#date1").textContent = fulldate;

const date = new Date();

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const year = date.getFullYear();
const month = months[date.getMonth()];
const day = days[date.getDay()];
console.log(date);
console.log(year);
console.log(month);
console.log(day);
const fulldate = `${month} ${date.getDay()+1}, ${year} `;
document.querySelector("#date2").textContent = fulldate;
const format = {
		day: "numeric",
		month: "short",
		year: "numeric"
	};
date1.innerHTML = `${new Date().toLocaleDateString("en-US", format)}`;
