const urlfruits = "https://brotherblazzard.github.io/canvas-content/fruit.json"
const select1 = document.querySelector("#fruit1");
const select2 = document.querySelector("#fruit2");
const select3 = document.querySelector("#fruit3");
const form = document.querySelector("#form");



const formimail = document.querySelector("#formimail");
const formphone = document.querySelector("#formphone");
const formordetime = document.querySelector("#formordetime");
const formfruit1 = document.querySelector("#formfruit1");
const formfruit2 = document.querySelector("#formfruit2");
const formfruit3 = document.querySelector("#formfruit3");
const formtotalcarb = document.querySelector("#formtotalcarb");
const formtotalfat = document.querySelector("#formtotalfat");
const formtotalsugar = document.querySelector("#formtotalsugar");
const formtotalcalories = document.querySelector("#formtotalcalories");









function createlist(fruits){
  
  fruits.forEach((fru) => {
  let fruit = document.createElement("option");
  let fruit2 = document.createElement("option");
  let fruit3 = document.createElement("option");
  fruit.innerHTML = fru.name;
  fruit2.innerHTML = fru.name;
  fruit3.innerHTML = fru.name;
  select1.appendChild(fruit);
  select2.appendChild(fruit2);
  select3.appendChild(fruit3);
    
  });
  
  
  
}
function CheckOrder(){

  form.id = "displaynone";
  
  calculatenutri()

  }
async function calculatenutri(){
  try{
    const response = await fetch(urlfruits);
    
    if (response.ok){
    const data = await response.json();
    console.log(data);
      var totalcarb = 0;
      var totalfat = 0;
      var totalprotein = 0;
      var totalcalories = 0;
      var totalsugar = 0;
      var fruitselected1  = document.getElementById('fruit1').value;
      var fruitselected2  = document.getElementById('fruit2').value;
      var fruitselected3  = document.getElementById('fruit3').value;
      
        data.forEach((fru) => {
   
  if (fru.name==fruitselected1){
    totalcarb = totalcarb+fru.nutritions.carbohydrates;
    totalfat = totalfat+fru.nutritions.fat;
    totalprotein = totalprotein + fru.nutritions.protein;
    totalcalories = totalcalories + fru.nutritions.calories;
    totalsugar = totalsugar + fru.nutritions.sugar;
    formfruit1.innerHTML = fruitselected1;
    
  }
  if (fru.name==fruitselected2){
    totalcarb = totalcarb+fru.nutritions.carbohydrates;
    totalfat = totalfat+fru.nutritions.fat;
    totalprotein = totalprotein + fru.nutritions.protein;
    totalcalories = totalcalories + fru.nutritions.calories;
    totalsugar = totalsugar + fru.nutritions.sugar;
    formfruit2.innerHTML = fruitselected2;
    
  }
  if (fru.name==fruitselected3){
    totalcarb = totalcarb+fru.nutritions.carbohydrates;
    totalfat = totalfat+fru.nutritions.fat;
    totalprotein = totalprotein + fru.nutritions.protein;
    totalcalories = totalcalories + fru.nutritions.calories;
    totalsugar = totalsugar + fru.nutritions.sugar;
    formfruit3.innerHTML = fruitselected3;
    
  }

    console.log(totalprotein);
    formtotalcarb.innerHTML = totalcarb;
    formtotalfat.innerHTML = totalfat;
    formtotalsugar.innerHTML = totalsugar;
    formtotalcalories.innerHTML = totalcalories;

  
 
    
  });
      
    }else{
        throw Error(await response.text());
    }
    } catch (error) {
        console.log(error);
    
}
  
 



 
  
  
  
}




async function fruits(){
    try{
    const response = await fetch(urlfruits);
    

    if (response.ok){
    const data = await response.json();
    createlist(data);
    }else{
        throw Error(await response.text());
    }
    } catch (error) {
        console.log(error);
    
}
 
}


fruits();


