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
let month = time.getMonth();
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

//banner
if (dayname=="Monday" ||dayname== "Tuesday"){
 let banner = document.createElement("h2");
 let bannerdiv = document.createElement("div");
 let text = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
 let nav = document.querySelector("nav");
 banner.innerHTML = text;
 bannerdiv.appendChild(banner)
 console.log(banner)
 bannerdiv.classList.add("banner")
 nav.appendChild(bannerdiv)




}else{
  console.log("no");
}

// lazy loading
let loadelement =  document.querySelectorAll("img[src-loaded]")

function replaceimg(img) {
img.setAttribute("src", img.getAttribute("src-loaded"))
img.onload = () => {
  img.removeAttribute("src-loaded");
};
}


if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        replaceimg(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  loadelement.forEach((img) => {
    observer.observe(img);
  });
} else {
  loadelement.forEach((img) => {
    replaceimages(img);
    
  });
}

//website visits
visit = localStorage.getItem(visits) || 0;
visit++
localStorage.setItem(visits, visit)
document.querySelector("#visits").innerHTML = visit;







