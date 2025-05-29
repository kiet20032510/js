let result = document.querySelector(".thoitiet")
async function fetchWeather(latitude, longitude) {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    const response = await fetch(url)
    const data = await response.json()
    const weather = data.current_weather
    console.log(data)

   result.innerHTML = `
       Nhiet do: ${weather.temperature}°C <br>
       Gio: ${weather.windspeed} km/h <br>
       Thoi gian: ${weather.time}`
     
  } catch (err) {
    result.innerHTML = 'Khong the lay du lieu'
    console.error(err)
  }
}

function getLocation() {


  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      fetchWeather(latitude, longitude)
    },
    (error) => {
      result.innerHTML = 'Khong the lay vi tri'
      console.error(error)
    }
  )
}

window.onload = getLocation
