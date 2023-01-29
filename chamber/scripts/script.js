let lastMod = new Date(document.lastModified)
const yearmod = lastMod.getFullYear();
const monthmod = lastMod.getMonth()+1;
const daymod = lastMod.getDate();

const hoursmod = lastMod.getHours();
const minutesmod = lastMod.getMinutes();
const secondsmod = lastMod.getSeconds();
lastMod = ` ${monthmod}/${daymod}/${yearmod} ${hoursmod}:${minutesmod}:${secondsmod}`;
document.querySelector("#lastmod").textContent = lastMod;


//Display Current Time
const time = new Date();
const day = time.getDay();
const date = time.getDate();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let dayname = days[day]
let month = time.getMonth()+1;
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

let monthname = months[month]
const year = time.getFullYear();
const fulltime = `${dayname}, ${date} ${monthname} ${year}`;
console.log(fulltime);
document.querySelector("#currentdate").textContent =fulltime;

//Change

const mynave = document.querySelector('.navigation');
const hamburg = document.querySelector('#btn');
const letter = document.querySelector('#btn').textContent;

hamburg.addEventListener('click', () =>{mynave.classList.toggle('navigationopen')}, false);


function toggleMenu(){
  console.log("xxx"); 
}
const btnham = document.getElementById('btn')
btnham.onclick = toggleMenu;



