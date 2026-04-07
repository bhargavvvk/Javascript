let temp;
let humidity;
let description;
const button=document.getElementById('weather')
    .addEventListener('click', function() {
        const city=document.getElementById('city-input').value;
        console.log(city);
        let citydisplay=document.getElementById('city-name');
        citydisplay.textContent=city;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a37d206315167332730c4326c82b5ec3&units=metric`)
            .then(response => response.json())
            .then(data => {
                let status = data.cod;
                if (status === "404") {
                    alert("City not found. Please enter a valid city name.");
                    document.getElementById('temperature').textContent = `Temperature: N/A`;
                    document.getElementById('humidity').textContent = `Humidity: N/A`;
                    document.getElementById('description').textContent = `Description: N/A  `;
                    throw new Error("City not found");
                }
                temp = data.main.temp;
                humidity = data.main.humidity;
                description = data.weather[0].description;
                console.log(temp, humidity, description);
            document.getElementById('temperature').textContent = `Temperature: ${temp} °C`;
            document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
            document.getElementById('description').textContent = `Description: ${description}`;
                return data;
            });
    });