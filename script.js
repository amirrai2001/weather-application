const API_key = '813d6457817f4f6c85b0af017f9ca1c2'
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
//const api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}&units=metric`

const getweather =async (city)=>{
    weather.innerHTML = `<h2> Loading... <h2>`

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    
    return shoewaether(data)
    
}
const shoewaether = (data)=>{   
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML=` <div>
    <h2>temperature:${data.main.temp}℃</h2>
    <h2>humidity: ${data.main.humidity} </h2>
    
    

</div>`
}


form.addEventListener('submit',function(event) {
    event.preventDefault()
    getweather(search.value)
    
})