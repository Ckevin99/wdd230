let loadelement =  document.querySelectorAll("img[data-src]")

function replaceimg(img) {
img.setAttribute("src", img.getAttribute("data-src"))
img.onload = () => {
  img.removeAttribute("data-src");
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




