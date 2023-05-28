const apikey = "d96ce6658129c0977d7664ec471dfeed";
                const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=lagos";


async function checkweather (){
    const response = await fetch(apiUrl + '&appid=${apikey}');
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "0c";
}