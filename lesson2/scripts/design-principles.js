let lastupdate = new Date(document.lastModified);
let lastday = lastupdate.getDate();
let lastmonth = lastupdate.getMonth()+1;
let lastyear = lastupdate.getFullYear();
let lasthour = lastupdate.getHours();
let lastminute = lastupdate.getMinutes();
let lastsecond = lastupdate.getSeconds();
let fulldate = ` ${lastmonth}/${lastday}/${lastyear} ${lasthour}:${lastminute}:${lastsecond}`
date.innerHTML = fulldate

console.log(fulldate)
