const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&lunits=imperial&appid=defd4c25a0effc4ae389640ef95311a1";
console.log(url);



function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const icon = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    weatherIcon.src = icon;

    weatherIcon.alt = weatherData.weather[0].description;
    captionDesc.innerHTML = weatherData.weather[0].description;

   

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