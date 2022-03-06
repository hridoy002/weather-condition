const api_key =`46ad7457603b9b0104e633e78cd60e16`;

const search_btn = () =>{
    const input_location = document.getElementById('input_location').value;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input_location}&appid=${api_key}&units=metric`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemparature(data))
}

const displayTemparature = data =>{
    const city = document.getElementById('city_name').innerText = data.name;
    console.log(data);

    const temparature = document.getElementById('temparature').innerText = data.main.temp;

    const weather = document.getElementById('weather').innerText = data.weather[0].main;

    const weather_icon = document.getElementById('weather_icon').setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
}