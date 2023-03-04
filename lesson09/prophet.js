const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

var prophetsdata = [];
let cards = document.querySelector(".cards");

function displayProphets(pname){
   pname.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let photo = document.createElement('img');
    let birthdate = document.createElement("p")
    let placeofbirth = document.createElement("p")


    h2.innerHTML = prophet.name;
    placeofbirth.innerHTML =`Birth Place: ${prophet.birthplace}`;
    photo.src= prophet.imageurl;
    birthdate.innerHTML = `Birthdate: ${prophet.birthdate}`
    card.classList.add("card")
    cards.appendChild(card); 
    card.appendChild(h2);
    card.appendChild(birthdate)
    card.appendChild(placeofbirth)
    card.appendChild(photo)
    
    

  })
}


async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json()
    prophetsdata = data.prophets;
    console.log(prophetsdata)
    displayProphets(prophetsdata);
}
getProphetData()
