try{
    visit = localStorage.getItem("visits")
  }catch{
    visit = 0;
  }

  orderedtimes = document.querySelector("#orderedtimes");
  orderedtimes.innerHTML = visit;