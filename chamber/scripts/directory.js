// extract json files and create html.

url = "https://skill99.github.io/wdd230/chamber/data.json"
var companiesdata = [];
let cards = document.querySelector(".cards");
let tabletr = document.createElement("table");

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
    website.innerHTML = `<a href="https:${company.website}">${company.name} website</a>`;
    photo.src= company.imagefile;
    photo.alt= "Company Logo";

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
    websitetd.innerHTML = `<a href="https:${company.website}">${company.name} website</a>`;
    phonetd.innerHTML = company.phone;
    addresstd.innerHTML = company.address; 

    listtd.appendChild(companynametd);
    listtd.appendChild(companymembershiptd);
    listtd.appendChild(phonetd);
    listtd.appendChild(addresstd);
    listtd.appendChild(websitetd);
    tabletr.appendChild(listtd);
    tabletr.classList.add("cardsoff");

    cards.appendChild(tabletr);




    
    

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
let btnopen = document.getElementById("open");
let btnclose = document.getElementById("close")
function opendirect(){

  let directorylist = document.querySelectorAll("section");
  console.log(directorylist);
  directorylist.forEach((Element) =>{
  Element.classList.add("card")
  });
  directorylist.forEach((Element) =>{
    Element.classList.remove("cardsoff")
    });


    let tdlist = document.querySelectorAll("table");
  tdlist.forEach((Element) =>{
    Element.classList.add("cardsoff")
    });
    tdlist.forEach((Element) =>{
      Element.classList.remove("cardtr")
      });


      cards.classList.add("cards");
      cards.classList.remove("cardstr");

      btnclose.classList.remove("clicked");
      btnopen.classList.add("clicked");


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

  let tdlist = document.querySelectorAll("table");
  tdlist.forEach((Element) =>{
    Element.classList.add("cardtr")
    });
    tdlist.forEach((Element) =>{
      Element.classList.remove("cardsoff")
      });

      cards.classList.add("cardstr")
      cards.classList.remove("cards")
  

      btnopen.classList.remove("clicked");
      btnclose.classList.add("clicked");

    

}