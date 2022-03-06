const api_key = `46ad7457603b9b0104e633e78cd60e16`;

const search_btn = ()=>{
    const location = document.getElementById('input_location').value;
    
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api_key}`;
  
    fetch (url)
    .then(res => res.json())
     .then(data => displaySearchValue(data));
}

const displaySearchValue = data =>{
    const city =document.getElementById('city_name');
    console.log(data)
    city.innerText = data.name;
    const temparature = document.getElementById('temparature');
    temparature.innerText = data.main.temp;

    const weather =document.getElementById('weather').innerText = data.weather[0].main;

    const url =`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    const weather_icon = document.getElementById('weather_icon').setAttribute('src',url);
}