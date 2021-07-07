// main temp info
let cityName = document.querySelector('.city')
let temperature = document.querySelector('.temperature')
let input = document.querySelector('.search-city')
let body = document.querySelector('body')

// temp details
let description = document.querySelector('.description')
let humidity = document.querySelector('.humidity')
let windVel = document.querySelector('.wind')
let feelsLike = document.querySelector('.feels')
let maxTemp = document.querySelector('.max')
let minTemp = document.querySelector('.min')


const unit = 'metric'
const key = '8c2b8e4edb1d28bb54825802feab3d02'
const base = 'http://api.openweathermap.org/data/2.5/'


input.addEventListener('keyup', function(event) {
  if (event.keyCode == '13' || event.code == 'NumpadEnter') {
    getApi()
  }
})


function getApi() {
  const api = `${base}weather?q=${input.value}&units=${unit}&appid=${key}`
    fetch(api)
      .then(response => {
      response.json()
      .then(data => {
        console.log(data)
        let name = data['name']
        let country = data['sys']['country']
        let temp = data['main']['temp']
        let max = data['main']['temp_max']
        let min = data['main']['temp_min']
        let feels = data['main']['feels_like']
        let main = data['weather'][0]['main']
        let wind = data['wind']['speed']
        let humi = data['main']['humidity']

        // changing the names

        description.innerHTML = main
        cityName.innerHTML = `${name}, ${country}`
        temperature.innerHTML = `${Math.floor(temp)}°`
        maxTemp.innerHTML = `${Math.floor(max)}°`
        minTemp.innerHTML = `${Math.floor(min)}°`
        feelsLike.innerHTML = `${Math.floor(feels)}°`      
        windVel.innerHTML = `${Math.floor(wind * 3.6)}Km/h`
        humidity.innerHTML = `${humi}%`  

        if (main == 'Clouds') {
          body.style.background = 'url(assets/clouds.jpg)'
        }else if (main == 'Ash'){
          body.style.background = 'url(assets/ash.jpg)'
        }else if (main == 'Squall'){
          body.style.background = 'url(assets/squall.jpg)'
        }else if (main == 'Tornado'){
          body.style.background = 'url(assets/tornado.jpg)'
        }else if (main == 'Clear'){
          body.style.background = 'url(assets/clear.jpg)'
        }else if (main == 'Rain'){
          body.style.background = 'url(assets/rain.jpg)'
        }else if (main == 'Drizzle'){
          body.style.background = 'url(assets/rain.jpg)'
        }else if (main == 'Thunderstorm'){
          body.style.background = 'url(assets/thunderstorm.jpg)'
        }else if (main == 'Snow'){
          body.style.background = 'url(assets/snow.jpg)'
        }else if (main == 'Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand'){
          body.style.background = 'url(assets/mist.jpg)'
        }
       
      })
      .catch(e => {
        alert(`Check if the spelling is correct. Here's your error "${e.message}"`)
      })
      })
}



