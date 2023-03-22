//website visits


let daylastvisit = localStorage.getItem("daylastvisit") || time.getDate();
let monthlastvisit = localStorage.getItem("monthlastvisit")|| time.getMonth()+1;
let yearlastvisit = localStorage.getItem("yearlastvisit")|| time.getFullYear();
let hourlastvisit = localStorage.getItem("yearlasthour")|| time.getHours();



lastvisit = new Date(`${yearlastvisit}`,`${monthlastvisit-1}`,`${daylastvisit}`, `${hourlastvisit}`);




var diffence = ((time-lastvisit)/86400000);
diffence = Math.round(diffence);




lastvisit = new Date();
localStorage.setItem("daylastvisit", time.getDate());
localStorage.setItem("monthlastvisit", time.getMonth()+1);
localStorage.setItem("yearlastvisit", time.getFullYear());
localStorage.setItem("hourlastvisit", time.getHours());

document.querySelector("#visits").innerHTML = `${diffence} days ago.`;