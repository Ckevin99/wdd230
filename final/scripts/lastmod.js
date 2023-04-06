let lastMod = new Date(document.lastModified)
const yearmod = lastMod.getFullYear();
const monthmod = lastMod.getMonth()+1;
const daymod = lastMod.getDate();

const hoursmod = lastMod.getHours();
const minutesmod = lastMod.getMinutes();
const secondsmod = lastMod.getSeconds();
lastMod = ` ${monthmod}/${daymod}/${yearmod} ${hoursmod}:${minutesmod}:${secondsmod}`;
document.querySelector("#lastmod").textContent = lastMod;