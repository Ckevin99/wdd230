let lastMod = new Date(document.lastModified);
const year = lastMod.getFullYear();
const month = lastMod.getMonth()+1;
const day = lastMod.getDay()+1;
const hours = lastMod.getHours();
const minutes = lastMod.getMinutes();
const seconds = lastMod.getSeconds();
lastMod = ` Last Updated: ${month}/${day}/${year} ${hours}:${minutes}:${seconds}`
console.log(lastMod)
date.innerHTML = lastMod;