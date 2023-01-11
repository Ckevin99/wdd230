let lastMod = new Date(document.lastModified);
let currentdate = new Date();
const year = lastMod.getFullYear();
const month = lastMod.getMonth()+1;
const day = lastMod.getDate();

const hours = lastMod.getHours();
const minutes = lastMod.getMinutes();
const seconds = lastMod.getSeconds();
lastMod = ` Last Updated: ${month}/${day}/${year} ${hours}:${minutes}:${seconds}`
console.log(lastMod)
date.innerHTML = lastMod;
currentyear.innerHTML = currentdate.getFullYear();