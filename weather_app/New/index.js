const date = new Date();
const currentDate = date.toString()
const value = currentDate.split(" ")

const newDate = value[0]+" "+value[1]+" "+value[2]+" "+value[3];
document.querySelector(".date").innerHTML = newDate;


const apiKey = "63118f93d68eccb578e2ec58095660da";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const clickButton = document.querySelector(".search button");


async function checkWheather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data)
    document.querySelector(".city").innerHTML =data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°";
    document.querySelector(".desc").innerHTML = data.weather[0].main
    document.querySelector(".glevel").innerHTML = data.main.grnd_level;
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%"
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed)+"km/h"
    document.querySelector(".cloud").innerHTML = data.clouds.all+"%"
    document.querySelector(".sea_level").innerHTML = data.main.sea_level
}

clickButton.addEventListener("click",()=>{
    checkWheather(searchBox.value);
})