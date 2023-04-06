

function leftimg(){
   let img = document.querySelector("#imghero");
   img.setAttribute("src", img.getAttribute("src2"));
}
function rightimg(){
    let img = document.querySelector("#imghero");
    img.setAttribute("src", img.getAttribute("loaded-src"));
 }