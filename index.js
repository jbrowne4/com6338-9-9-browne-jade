// weather display container 
const weatherContainer = document.getElementById('weather');
const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');

// form
formEl.onsubmit = function (e) {
    e.preventDefault(); 
    
    // user input
   const userInput = inputEl.value.trim();
    
    if (!userInput) return; 

    // weather data and display it if found, otherwise display error message
 getWeather(userInput)
        .then(displayWeatherInfo)
        .catch(displayLocNotFound);
    
    inputEl.value = ""; 
};
/* 
//  fetch weather data from the API
async function getWeather(query) {
    // Default to 'us' 
    if (!query.includes(",")) query += ',us';

    // Fetch weather data from the OpenWeatherMap API
    const response = await fetch(
        `https://api.openweathermap.org/data/3.0/weather?q=${query}&units=imperial&APPID=6f472cfbf92aff8f9ee810374f0c3e63`
    );
    const data = await response.json();

    // Throw an error if the location is not found
    if (data.cod === "404") throw new Error('Location not found');

    const {
        coord: { lat, lon },
        weather: [{ icon, description }],
        main: { temp: actualTemp, feels_like: feelsLikeTemp },
        name,
        sys: { country },
        dt
    } = data;

    // Create weather data
    return {
        coords: `${lat}, ${lon}`,
        description,
        iconUrl: `https://openweathermap.org/img/wn/${icon}@2x.png`,
        actualTemp,
        feelsLikeTemp,
        place: `${name}, ${country}`,
        updatedAt: new Date(dt * 1000)
    };
}


// display an error message if the location is not found
function displayLocNotFound() {
    weatherContainer.innerHTML = ""; // clear previous

    // error message
    var errMsg = document.createElement('h2');
    errMsg.textContent = "Location not found";
    weatherContainer.appendChild(errMsg);
}

const displayWeatherInfo({ place, coords, iconUrl, description, actualTemp, feelsLikeTemp, updatedAt }) {
    weatherContainer.innerHTML = ``; // Clear previous weather data

    const addBreak = () => weatherContainer.appendChild(document.createElement('br'));

    // Location name
    const placeName = document.createElement('h2');
    placeName.textContent = place;
    weatherContainer.appendChild(placeName);

    // Google Maps link
    const whereLink = document.createElement('a');
    whereLink.textContent = `Click to view map`;
    whereLink.href = `https://www.google.com/maps/search/?api=1&query=${coords}`;
    whereLink.target = "_blank";
    weatherContainer.appendChild(whereLink);

    // Weather condition icon
    const icon = document.createElement('img');
    icon.src = iconUrl;
    weatherContainer.appendChild(icon);

    // Weather description
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;
    descriptionElement.style.textTransform = 'capitalize';
    weatherContainer.appendChild(descriptionElement);

    addBreak(); // Line break

    // Actual temperature
   let temp = document.createElement('p');
    temp.textContent = `Current: ${actualTemp}℉`;
    weatherContainer.appendChild(temp);

    // 'Feels like' temperature
    let feelsLike = document.createElement('p');
    feelsLike.textContent = `Feels Like: ${feelsLikeTemp}℉`;
    weatherContainer.appendChild(feelsLike);

    // Last updated time
    let updated = document.createElement('p');
    updated.textContent = `Last updated: ${updatedAt.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`;
    weatherContainer.appendChild(updated);
}
    */