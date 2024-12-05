const apiKey = "63118f93d68eccb578e2ec58095660da";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const clickButton = document.querySelector(".search button");


const weatherIcon = document.querySelector(".wheather-icon");


async function checkWheather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data)
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%"
    document.querySelector(".wind").innerHTML = data.wind.speed+"km/h"

    document.querySelector(".wheather").style.display = "block";
}

clickButton.addEventListener("click",()=>{
    checkWheather(searchBox.value);
})




