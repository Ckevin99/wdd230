const temperature = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windspeed = document.querySelector('#current-windspeed');
const windchill = document.querySelector("#windchill");

const url = "https://api.openweathermap.org/data/2.5/weather?q=Brazil&units=imperial&appid=defd4c25a0effc4ae389640ef95311a1";
console.log(url);



function displayResults(weatherData) {
    numerictemp = weatherData.main.temp;
    numericwindspeed = weatherData.wind.speed;
    temperature.innerHTML = `<strong>${numerictemp.toFixed(1)}</strong>`;
    windspeed.innerHTML = `<strong>${numericwindspeed.toFixed(1)}</strong>`;

    const icon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    console.log
    weatherIcon.src = icon;
    weatherIcon.alt = weatherData.weather[0].description;
    captionDesc.innerHTML = weatherData.weather[0].description;
 

    if (numerictemp<=50 && numericwindspeed>3) {
        chill = 35.74 + (0.6215*numerictemp)-(35.75*Math.pow(numericwindspeed, 0.16)) + 0.4275* numerictemp * Math.pow(numericwindspeed,0.16);
       windchill.innerHTML = `${chill.toFixed(1)}°`;
     }else {
        windchill.innerHTML = "N/A";
     }

   

  }


async function weatherfetch(){
    try{
    const response = await fetch(url);
    

    if (response.ok){
    const data = await response.json();
    console.log(data)
    displayResults(data)
    }else{
        throw Error(await response.text());
    }
    } catch (error) {
        console.log(error);
    
}
 
}

weatherfetch()