const cityinput = document.getElementById('cityinput');
const addinput = document.getElementById('submit');
const cityoutput = document.getElementById('cityoutput');
const decoutput = document.getElementById('description');
const tempoutput = document.getElementById('temp');
const windoutput  = document.getElementById('wind');

const apikey = "3045dd712ffe6e702e3245525ac7fa38";

function covertTocel (value){
    return (value-273).toFixed(2).trim()
}

async function getweather() {
    let weatherResult = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityinput.value}&appid=${apikey}`)).json();
    

    setinfo(weatherResult);
    cityinput.value = "";
}

function setinfo(data) {
    let cityname = data["name"];
    let description = data["weather"][0]["description"];
    let temp = data["main"]["temp"];
    let wind = data["wind"]["speed"];

    cityoutput.innerHTML = `Ctiy : ${cityname}`;
    decoutput.innerHTML = `Description : ${description}`;
    tempoutput.innerHTML = `Temprature : ${covertTocel(temp)}`;
    windoutput.innerHTML =`Wind Speed : ${wind} 'km/h'`;
}

addinput.addEventListener('click',getweather)
