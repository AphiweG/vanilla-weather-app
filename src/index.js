function displayTemperature(response) {
  console.log(response.data.main);
  const temeratureElement = document.getElementById("temperature");
  const cityElement = document.getElementById("city");
  const descriptionElement = document.getElementById("description");
  const humidityElement = document.getElementById("humidity");
  const windElement = document.getElementById("wind");
  temeratureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = response.data.wind.speed;
}

const apiKey = "9ab9c8883313d4e254caf910926ea7c5";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Midrand&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
