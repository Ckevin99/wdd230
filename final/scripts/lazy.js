let loadelement =  document.querySelectorAll("img[data-loaded]")

function replaceimg(img) {
img.setAttribute("src", img.getAttribute("data-loaded"))
img.onload = () => {
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