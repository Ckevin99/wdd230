// extract json files and create html.

url = "https://skill99.github.io/wdd230/chamber/data.json"
var companiesdata = [];
let cards = document.querySelector(".cards");

function displaycompanies(companies){
   companies.forEach((company) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let photo = document.createElement('img');
    let website = document.createElement("p");
    let phone = document.createElement("p");
    let address = document.createElement("p");


    h2.innerHTML = company.name;
    h3.innerHTML = company.membership;
    website.innerHTML = company.website;
    photo.src= company.imagefile;

    phone.innerHTML = company.phone;
    address.innerHTML = company.address; 
    photo.setAttribute('loading', 'lazy');
    
    card.classList.add("card")
    cards.appendChild(card); 
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(address);
    card.appendChild(photo);


    
    

  })
}


  async function getcompanies(){
    
    const response = await fetch(url);
    const data = await response.json()
    companiesdata = data;
    console.log(companiesdata)
    displaycompanies(companiesdata);
}
getcompanies()
