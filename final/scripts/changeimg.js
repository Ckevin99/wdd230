

function leftimg(){
   let img = document.querySelector("#imghero");
   img.setAttribute("src", img.getAttribute("data-2"));
}
function rightimg(){
    let img = document.querySelector("#imghero");
    img.setAttribute("src", img.getAttribute("data-loaded"));
 }