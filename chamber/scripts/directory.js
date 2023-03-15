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



    let companynametd = document.createElement('td');
    let companymembershiptd = document.createElement('td');
    let websitetd = document.createElement("td");
    let phonetd = document.createElement("td");
    let addresstd = document.createElement("td");
    let listtd = document.createElement("tr");

    companynametd.innerHTML = company.name;
    companymembershiptd.innerHTML = company.membership;
    websitetd.innerHTML = company.website;
    phonetd.innerHTML = company.phone;
    addresstd.innerHTML = company.address; 

    listtd.appendChild(companynametd);
    listtd.appendChild(companymembershiptd);
    listtd.appendChild(phonetd);
    listtd.appendChild(addresstd);
    listtd.appendChild(websitetd);
    listtd.classList.add("cardsoff");

    cards.appendChild(listtd);




    
    

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

function opendirect(){

  let directorylist = document.querySelectorAll(".cardsoff");
  console.log(directorylist);
  directorylist.forEach((Element) =>{
  Element.classList.add("card")
  });
  directorylist.forEach((Element) =>{
    Element.classList.remove("cardsoff")
    });


    let tdlist = document.querySelectorAll("tr");
  tdlist.forEach((Element) =>{
    Element.classList.add("cardsoff")
    });
    tdlist.forEach((Element) =>{
      Element.classList.remove("cardtr")
      });


      cards.classList.add("cards")
      cards.classList.remove("cardstr")


}

function closedirect(){
  console.log("close");
  let directorylist = document.querySelectorAll("section");
  
  directorylist.forEach((Element) =>{
  Element.classList.add("cardsoff")
  });
  directorylist.forEach((Element) =>{
    Element.classList.remove("card")
    });

  let tdlist = document.querySelectorAll("tr");
  tdlist.forEach((Element) =>{
    Element.classList.add("cardtr")
    });
    tdlist.forEach((Element) =>{
      Element.classList.remove("cardsoff")
      });

      cards.classList.add("cardstr")
      cards.classList.remove("cards")
  

    

}