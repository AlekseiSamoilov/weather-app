let weather = {
    "apiKey": "b2404064774d1ac25905a114ee08c57a",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
            .then((res) => res.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector('.city').innerText = "Weather in " + name;
        document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = temp + '°C';
        document.querySelector('.humidity').innerText = "Humidity" + humidity + "%";
        document.querySelector('.wind').innerText = "Wind speed " + speed + "km/h";
        document.querySelector('.weather').classList.remove('loading');
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1400x800/?" + name + "')"
    },
    search: function () {
        this.fetchWeather(document.querySelector('.search-bar').value);
    }
};

document.querySelector('.search button').addEventListener('click', function () {
    weather.search();
});
document.querySelector('.search-bar').addEventListener('keyup', function (evt) {
    if (evt.key == "Enter") {
        weather.search();
    }
})
// https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=b2404064774d1ac25905a114ee08c57a

weather.fetchWeather('saint petersburg')