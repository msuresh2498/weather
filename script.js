


async function getweather(){
    var cityName = document.getElementById('cityName').value;
    console.log(cityName)

let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=716000a4cf521da7974e654a135e0a73`)
let result = await data.json()
console.log(result)

var weather = document.getElementById('weather')
weather.innerHTML =`<div class="card mb-3" style="max-width: 540px;" id>
<div class="row g-0">
  <div class="col-md-4">
    <img src="https://media.istockphoto.com/photos/weather-forecast-on-a-digital-display-7-day-dashboard-3d-illustration-picture-id1176320050?b=1&k=20&m=1176320050&s=170667a&w=0&h=kFVSnawkQ4PMZBnauDKPJDDt6HXiH_4SDHKqlFGHEX0=" class=" cardimg img-fluid rounded-start">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">Weather Report</h5>
      <h3 class="card-text">CityName: ${cityName}</h3>
      <h3>Temperature: ${result.main.temp}</h3>
      <h3>Wind Speed: ${result.wind.speed}</h3>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>`;
}
