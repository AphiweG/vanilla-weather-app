const currentDate = new Date();

const date = "currentDate";
const dateElement = document.getElementById(date);

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayOfWeek = daysOfWeek[currentDate.getDay()];
const hours = String(currentDate.getHours()).padStart(2, "0");
const minutes = String(currentDate.getMinutes()).padStart(2, "0");
const currentTime = `${dayOfWeek} ${hours}:${minutes}`;
console.log(currentTime);
dateElement.textContent = `${currentTime}`;

function displayTemperature(response) {
  console.log(response.data);
  const temeratureElement = document.getElementById("temperature");
  const cityElement = document.getElementById("city");
  const descriptionElement = document.getElementById("desciption");
  const humidityElement = document.getElementById("humidity");
  const windElement = document.getElementById("wind");
  const iconElement = document.getElementById("icon");
  temeratureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  iconElement.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
    
const apiKey = "9ab9c8883313d4e254caf910926ea7c5";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);

}

function handleSubmit(event) {
    event.preventDefault();
    const cityInputElement = document.getElementById("city-input");
    console.log(cityInputElement.value);
    search(cityInputElement.value);

}




let form = document.getElementById("search-form");
form.addEventListener("submit", handleSubmit);
