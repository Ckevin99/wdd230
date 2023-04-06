const temperature = document.querySelector('#temperature');
const humidity = document.querySelector('#humidity');
const condition = document.querySelector('#condition');
const tempicon = document.querySelector('#tempicon');

const day1 = document.querySelector('#tempday1');
const fday1 = document.querySelector("#fday1");
const iday1 = document.querySelector("#iday1");

const day2 = document.querySelector('#tempday2');
const fday2 = document.querySelector("#fday2");
const iday2 = document.querySelector("#iday2");

const day3 = document.querySelector('#tempday3');
const fday3 = document.querySelector("#fday3");
const iday3 = document.querySelector("#iday3");


const urlforecast = "https://api.openweathermap.org/data/2.5/forecast?q=carlsbad&units=imperial&appid=defd4c25a0effc4ae389640ef95311a1";
const urlweather = "https://api.openweathermap.org/data/2.5/weather?q=carlsbad&units=imperial&appid=defd4c25a0effc4ae389640ef95311a1"




function getforecastweather(forecast) {
  day1.innerHTML = `<strong>${forecast.list[0].main.temp.toFixed(1)}</strong>`;
  fday1.innerHTML = `<strong>${forecast.list[0].dt_txt.slice(0, 10)}</strong>`;
  iday1.src = `https://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}@2x.png`;
  iday1.alt = forecast.list[0].weather[0].description;

  day2.innerHTML =  `<strong>${forecast.list[8].main.temp.toFixed(1)}</strong>`;
  fday2.innerHTML = `<strong>${forecast.list[8].dt_txt.slice(0, 10)}</strong>`;
  iday2.src = `https://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}@2x.png`;
  iday2.alt = forecast.list[8].weather[0].description;

  day3.innerHTML = `<strong>${forecast.list[16].main.temp.toFixed(1)}</strong>`;
  fday3.innerHTML = `<strong>${forecast.list[16].dt_txt.slice(0, 10)}</strong>`;
  iday3.src = `https://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}@2x.png`;
  iday3.alt = forecast.list[16].weather[0].description;

   

  }

function getweather(weather){
  temperature.innerHTML = `${weather.main.temp.toFixed(1)}`;
  humidity.innerHTML = `<strong>${weather.main.humidity.toFixed(1)}</strong>`;
  condition.innerHTML = `<strong>${weather.weather[0].description}</strong>`;
  tempicon.src =  `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  tempicon.alt = weather.weather[0].description;
}









async function forecastfetch(){
    try{
    const response = await fetch(urlforecast);
    

    if (response.ok){
    const data = await response.json();
    getforecastweather(data);
    }else{
        throw Error(await response.text());
    }
    } catch (error) {
        console.log(error);
    
}
 
}

async function weatherfetch(){
    try{
    const response = await fetch(urlweather);
    if (response.ok){
    const data = await response.json();
    getweather(data);
    }else{
        throw Error(await response.text());
    }
    } catch (error) {
        console.log(error);
    
}
 
}

weatherfetch()
forecastfetch()