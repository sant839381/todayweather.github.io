              //const API_KEY = `d9f700bee9a19a7edd37b31e76f0bf66`
const API_KEY=`09cdee397f8635b4cce9da247620effc`

//const API_KEY = `e11f87947c425873d8ea65eabed1dbee`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
    // const API = `https://api.openweathermap.org/data/2.5/weather?
    // q=${city}&appid=${API_KEY}&units=metric`
    // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
        // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`  
    //const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt={cnt}&appid=${API_KEY}&units=metric`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&cnt={cnt}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data) 
   
}


const showWeather = (data) => {

    console.log(data)
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4> <br>

            <h6> longitude=${data.coord.lon} lattitude=${data.coord.lat} <br>
            
               country=${data.sys.country}
            </h6>
        </div>
    `
}

form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)
