let weatherInfo = document.getElementById("weather-info");
let btnSearch = document.getElementById("btn-search");
let searchInput = document.getElementById("search-input");

function fetchWeather(country) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=eae3b612980b7423e2c96a3bd7345618`,
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      
      weatherInfo.innerHTML = `
        <h2>weather in ${data.name}</h2>
        <h1>${data.main.temp} C</h1>
        <p>${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind speed: ${data.wind.speed} Km/h</p>
      `;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}


btnSearch.addEventListener("click", function () {
  let cityName = searchInput.value;
  if (cityName !== "") {
    fetchWeather(cityName);
  }
});
