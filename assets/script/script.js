// DOM Elements 

let searchedCity = document.querySelector('#citySearch');

const dayZeroIcon = document.querySelector('#dayZeroIcon');
const dayZeroTemp = document.querySelector('#dayZeroTemp');
const dayZeroHumidity = document.querySelector('#dayZeroHumidity');
const dayZeroWindSpeed = document.querySelector('#dayZeroWindSpeed');

const dayOneIcon = document.querySelector('#dayOneIcon');
const dayOneTemp = document.querySelector('#dayOneTemp');
const dayOneHumidity = document.querySelector('#dayOneHumidity');
const dayOneWindSpeed = document.querySelector('#dayOneWindSpeed');

const dayTwoDate = document.querySelector('#dayTwoDate');
const dayTwoIcon = document.querySelector('#dayTwoIcon');
const dayTwoTemp = document.querySelector('#dayTwoTemp');
const dayTwoHumidity = document.querySelector('#dayTwoHumidity');
const dayTwoWindSpeed = document.querySelector('#dayTwoWindSpeed');

const dayThreeDate = document.querySelector('#dayThreeDate');
const dayThreeIcon = document.querySelector('#dayThreeIcon');
const dayThreeTemp = document.querySelector('#dayThreeTemp');
const dayThreeHumidity = document.querySelector('#dayThreeHumidity');
const dayThreeWindSpeed = document.querySelector('#dayThreeWindSpeed');

const dayFourDate = document.querySelector('#dayFourDate');
const dayFourIcon = document.querySelector('#dayFourIcon');
const dayFourTemp = document.querySelector('#dayFourTemp');
const dayFourHumidity = document.querySelector('#dayFourHumidity');
const dayFourWindSpeed = document.querySelector('#dayFourWindSpeed');

const dayFiveDate = document.querySelector('#dayFiveDate');
const dayFiveIcon = document.querySelector('#dayFiveIcon');
const dayFiveTemp = document.querySelector('#dayFiveTemp');
const dayFiveHumidity = document.querySelector('#dayFiveHumidity');
const dayFiveWindSpeed = document.querySelector('#dayFiveWindSpeed');

const cityName = document.querySelector('#cityName');

const validContainer = document.querySelector('#validContainer');

const searchButton = document.querySelector('#searchButton');

const clearHistoryButton = document.querySelector('#clearButton')

const searchHistory = document.querySelector('#historyRow');

let thisCityDiv = document.getElementsByClassName('.pastCity');

const apiKey = 'bf35508c0373c0cd74246faad2a78d1d';

// Global functions 

//need to load up a serach.. maybe my hometome?
function startPage() {
    populateSearchHistory();
    console.log('hello');
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=Bellevue&appid=${apiKey}`;
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            let thisCity = json.city.name;

            cityName.innerHTML = thisCity;

            let imageZeroId = json.list[0].weather[0].icon;
            let imageOneId = json.list[7].weather[0].icon;
            let imageTwoId = json.list[15].weather[0].icon;
            let imageThreeId = json.list[23].weather[0].icon;
            let imageFourId = json.list[31].weather[0].icon;
            let imageFiveId = json.list[39].weather[0].icon;

            let descriptionZero = json.list[0].weather[0].description;
            let descriptionOne = json.list[7].weather[0].description;
            let descriptionTwo = json.list[15].weather[0].description;
            let descriptionThree = json.list[23].weather[0].description;
            let descriptionFour = json.list[31].weather[0].description;
            let descriptionFive = json.list[39].weather[0].description;

            let imageZeroUrl = `http://openweathermap.org/img/wn/${imageZeroId}@2x.png`;
            let imageOneUrl = `http://openweathermap.org/img/wn/${imageOneId}@2x.png`;
            let imageTwoUrl = `http://openweathermap.org/img/wn/${imageTwoId}@2x.png`;
            let imageThreeUrl = `http://openweathermap.org/img/wn/${imageThreeId}@2x.png`;
            let imageFourUrl = `http://openweathermap.org/img/wn/${imageFourId}@2x.png`;
            let imageFiveUrl = `http://openweathermap.org/img/wn/${imageFiveId}@2x.png`;

            dayZeroIcon.innerHTML = `<img src='${imageZeroUrl}' /><p>Expect ${descriptionZero}.</p>`;
            dayOneIcon.innerHTML = `<img src='${imageOneUrl}' /><p>Expect ${descriptionOne}.</p>`;
            dayTwoIcon.innerHTML = `<img src='${imageTwoUrl}' /><p>Expect ${descriptionTwo}.</p>`;
            dayThreeIcon.innerHTML = `<img src='${imageThreeUrl}' /><p>Expect ${descriptionThree}.</p>`;
            dayFourIcon.innerHTML = `<img src='${imageFourUrl}' /><p>Expect ${descriptionFour}.</p>`;
            dayFiveIcon.innerHTML = `<img src='${imageFiveUrl}' /><p>Expect ${descriptionFive}.</p>`;

            let dateTwo = json.list[15].dt_txt;
            let dateThree = json.list[23].dt_txt;
            let dateFour = json.list[31].dt_txt;
            let dateFive = json.list[39].dt_txt;

            dayTwoDate.innerHTML = `${dateTwo} Eastern`;
            dayThreeDate.innerHTML = `${dateThree} Eastern`;
            dayFourDate.innerHTML = `${dateFour} Eastern`;
            dayFiveDate.innerHTML = `${dateFive} Eastern`;

            let tempKelvinZero = json.list[0].main.temp;
            let tempKelvinOne = json.list[7].main.temp;
            let tempKelvinTwo = json.list[15].main.temp;
            let tempKelvinThree = json.list[23].main.temp;
            let tempKelvinFour = json.list[31].main.temp;
            let tempKelvinFive = json.list[39].main.temp;

            let tempFahrenheitZero = convertToFahrenheit(tempKelvinZero);
            let tempFahrenheitOne = convertToFahrenheit(tempKelvinOne);
            let tempFahrenheitTwo = convertToFahrenheit(tempKelvinTwo);
            let tempFahrenheitThree = convertToFahrenheit(tempKelvinThree);
            let tempFahrenheitFour = convertToFahrenheit(tempKelvinFour);
            let tempFahrenheitFive = convertToFahrenheit(tempKelvinFive);

            dayZeroTemp.innerHTML = `${tempFahrenheitZero}&deg;F`;
            dayOneTemp.innerHTML = `${tempFahrenheitOne}&deg;F`;
            dayTwoTemp.innerHTML = `${tempFahrenheitTwo}&deg;F`;
            dayThreeTemp.innerHTML = `${tempFahrenheitThree}&deg;F`;
            dayFourTemp.innerHTML = `${tempFahrenheitFour}&deg;F`;
            dayFiveTemp.innerHTML = `${tempFahrenheitFive}&deg;F`;

            let humidityZero = json.list[0].main.humidity;
            let humidityOne = json.list[7].main.humidity;
            let humidityTwo = json.list[15].main.humidity;
            let humidityThree = json.list[23].main.humidity;
            let humidityFour = json.list[31].main.humidity;
            let humidityFive = json.list[39].main.humidity;

            dayZeroHumidity.innerHTML = `${humidityZero}% humidity`;
            dayOneHumidity.innerHTML = `${humidityOne}% humidity`;
            dayTwoHumidity.innerHTML = `${humidityTwo}% humidity`;
            dayThreeHumidity.innerHTML = `${humidityThree}% humidity`;
            dayFourHumidity.innerHTML = `${humidityFour}% humidity`;
            dayFiveHumidity.innerHTML = `${humidityFive}% humidity`;

            let windSpeedZero = json.list[0].wind.speed;
            let windSpeedOne = json.list[7].wind.speed;
            let windSpeedTwo = json.list[15].wind.speed;
            let windSpeedThree = json.list[23].wind.speed;
            let windSpeedFour = json.list[31].wind.speed;
            let windSpeedFive = json.list[39].wind.speed;

            dayZeroWindSpeed.innerHTML = `${windSpeedZero} mph wind`;
            dayOneWindSpeed.innerHTML = `${windSpeedOne} mph wind`;
            dayTwoWindSpeed.innerHTML = `${windSpeedTwo} mph wind`;
            dayThreeWindSpeed.innerHTML = `${windSpeedThree} mph wind`;
            dayFourWindSpeed.innerHTML = `${windSpeedFour} mph wind`;
            dayFiveWindSpeed.innerHTML = `${windSpeedFive} mph wind`;
        });

}

//waiting on API to work... check tomorrow
function populateWeather() {
    let city = searchedCity.value.trim();
    let apiKey = 'bf35508c0373c0cd74246faad2a78d1d';
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);

            let thisCity = json.city.name;

            cityName.innerHTML = thisCity;

            let imageZeroId = json.list[0].weather[0].icon;
            let imageOneId = json.list[7].weather[0].icon;
            let imageTwoId = json.list[15].weather[0].icon;
            let imageThreeId = json.list[23].weather[0].icon;
            let imageFourId = json.list[31].weather[0].icon;
            let imageFiveId = json.list[39].weather[0].icon;

            let descriptionZero = json.list[0].weather[0].description;
            let descriptionOne = json.list[7].weather[0].description;
            let descriptionTwo = json.list[15].weather[0].description;
            let descriptionThree = json.list[23].weather[0].description;
            let descriptionFour = json.list[31].weather[0].description;
            let descriptionFive = json.list[39].weather[0].description;

            let imageZeroUrl = `http://openweathermap.org/img/wn/${imageZeroId}@2x.png`;
            let imageOneUrl = `http://openweathermap.org/img/wn/${imageOneId}@2x.png`;
            let imageTwoUrl = `http://openweathermap.org/img/wn/${imageTwoId}@2x.png`;
            let imageThreeUrl = `http://openweathermap.org/img/wn/${imageThreeId}@2x.png`;
            let imageFourUrl = `http://openweathermap.org/img/wn/${imageFourId}@2x.png`;
            let imageFiveUrl = `http://openweathermap.org/img/wn/${imageFiveId}@2x.png`;

            dayZeroIcon.innerHTML = `<img src='${imageZeroUrl}' /><p>Expect ${descriptionZero}.</p>`;
            dayOneIcon.innerHTML = `<img src='${imageOneUrl}' /><p>Expect ${descriptionOne}.</p>`;
            dayTwoIcon.innerHTML = `<img src='${imageTwoUrl}' /><p>Expect ${descriptionTwo}.</p>`;
            dayThreeIcon.innerHTML = `<img src='${imageThreeUrl}' /><p>Expect ${descriptionThree}.</p>`;
            dayFourIcon.innerHTML = `<img src='${imageFourUrl}' /><p>Expect ${descriptionFour}.</p>`;
            dayFiveIcon.innerHTML = `<img src='${imageFiveUrl}' /><p>Expect ${descriptionFive}.</p>`;

            let dateTwo = json.list[15].dt_txt;
            let dateThree = json.list[23].dt_txt;
            let dateFour = json.list[31].dt_txt;
            let dateFive = json.list[39].dt_txt;

            dayTwoDate.innerHTML = `${dateTwo} Eastern`;
            dayThreeDate.innerHTML = `${dateThree} Eastern`;
            dayFourDate.innerHTML = `${dateFour} Eastern`;
            dayFiveDate.innerHTML = `${dateFive} Eastern`;

            let tempKelvinZero = json.list[0].main.temp;
            let tempKelvinOne = json.list[7].main.temp;
            let tempKelvinTwo = json.list[15].main.temp;
            let tempKelvinThree = json.list[23].main.temp;
            let tempKelvinFour = json.list[31].main.temp;
            let tempKelvinFive = json.list[39].main.temp;

            let tempFahrenheitZero = convertToFahrenheit(tempKelvinZero);
            let tempFahrenheitOne = convertToFahrenheit(tempKelvinOne);
            let tempFahrenheitTwo = convertToFahrenheit(tempKelvinTwo);
            let tempFahrenheitThree = convertToFahrenheit(tempKelvinThree);
            let tempFahrenheitFour = convertToFahrenheit(tempKelvinFour);
            let tempFahrenheitFive = convertToFahrenheit(tempKelvinFive);

            dayZeroTemp.innerHTML = `${tempFahrenheitZero}&deg;F`;
            dayOneTemp.innerHTML = `${tempFahrenheitOne}&deg;F`;
            dayTwoTemp.innerHTML = `${tempFahrenheitTwo}&deg;F`;
            dayThreeTemp.innerHTML = `${tempFahrenheitThree}&deg;F`;
            dayFourTemp.innerHTML = `${tempFahrenheitFour}&deg;F`;
            dayFiveTemp.innerHTML = `${tempFahrenheitFive}&deg;F`;

            let humidityZero = json.list[0].main.humidity;
            let humidityOne = json.list[7].main.humidity;
            let humidityTwo = json.list[15].main.humidity;
            let humidityThree = json.list[23].main.humidity;
            let humidityFour = json.list[31].main.humidity;
            let humidityFive = json.list[39].main.humidity;

            dayZeroHumidity.innerHTML = `${humidityZero}% humidity`;
            dayOneHumidity.innerHTML = `${humidityOne}% humidity`;
            dayTwoHumidity.innerHTML = `${humidityTwo}% humidity`;
            dayThreeHumidity.innerHTML = `${humidityThree}% humidity`;
            dayFourHumidity.innerHTML = `${humidityFour}% humidity`;
            dayFiveHumidity.innerHTML = `${humidityFive}% humidity`;

            let windSpeedZero = json.list[0].wind.speed;
            let windSpeedOne = json.list[7].wind.speed;
            let windSpeedTwo = json.list[15].wind.speed;
            let windSpeedThree = json.list[23].wind.speed;
            let windSpeedFour = json.list[31].wind.speed;
            let windSpeedFive = json.list[39].wind.speed;

            dayZeroWindSpeed.innerHTML = `${windSpeedZero} mph wind`;
            dayOneWindSpeed.innerHTML = `${windSpeedOne} mph wind`;
            dayTwoWindSpeed.innerHTML = `${windSpeedTwo} mph wind`;
            dayThreeWindSpeed.innerHTML = `${windSpeedThree} mph wind`;
            dayFourWindSpeed.innerHTML = `${windSpeedFour} mph wind`;
            dayFiveWindSpeed.innerHTML = `${windSpeedFive} mph wind`;
        });
    searchedCity.value = '';
};

//check previous class work for this
function convertToFahrenheit(tempKelvin) {
    let tempFahrenheit = Math.round(1.8 * (tempKelvin - 273) + 32);
    return tempFahrenheit;
};

function addToSearchHistory() {
    let city = searchedCity.value.trim();
    let previousSearches = JSON.parse(localStorage.getItem('previousSearches'));
    if (previousSearches == null) previousSearches = [];
    previousSearches.push(city);
    localStorage.setItem('previousSearches', JSON.stringify(previousSearches));
};

//need  to make sure this works
function populateSearchHistory() {
    searchHistory.innerHTML = "";
    let previousSearches = JSON.parse(localStorage.getItem('previousSearches'));
    for (let i = 0; i < previousSearches.length; i++) {
        thisCityDiv = document.createElement("div");
        searchHistory.appendChild(thisCityDiv);
        thisCityDiv.className = "col-lg-2 weatherDay pastCity";
        thisCityDiv.textContent = `${previousSearches[i]}`;
        console.log('we are getting here');
        thisCityDiv.addEventListener('click', function (e) {
            e.preventDefault;
            let thisCity = previousSearches[i];
            let url = `https://api.openweathermap.org/data/2.5/forecast?q=${thisCity}&appid=${apiKey}`;
            fetch(url)
                .then(function (response) {
                    return response.json();
                }).then(function (json) {
                    console.log(json);
                    let thisCity = json.city.name;

                    cityName.innerHTML = thisCity;

                    let imageZeroId = json.list[0].weather[0].icon;
                    let imageOneId = json.list[7].weather[0].icon;
                    let imageTwoId = json.list[15].weather[0].icon;
                    let imageThreeId = json.list[23].weather[0].icon;
                    let imageFourId = json.list[31].weather[0].icon;
                    let imageFiveId = json.list[39].weather[0].icon;

                    let descriptionZero = json.list[0].weather[0].description;
                    let descriptionOne = json.list[7].weather[0].description;
                    let descriptionTwo = json.list[15].weather[0].description;
                    let descriptionThree = json.list[23].weather[0].description;
                    let descriptionFour = json.list[31].weather[0].description;
                    let descriptionFive = json.list[39].weather[0].description;

                    let imageZeroUrl = `http://openweathermap.org/img/wn/${imageZeroId}@2x.png`;
                    let imageOneUrl = `http://openweathermap.org/img/wn/${imageOneId}@2x.png`;
                    let imageTwoUrl = `http://openweathermap.org/img/wn/${imageTwoId}@2x.png`;
                    let imageThreeUrl = `http://openweathermap.org/img/wn/${imageThreeId}@2x.png`;
                    let imageFourUrl = `http://openweathermap.org/img/wn/${imageFourId}@2x.png`;
                    let imageFiveUrl = `http://openweathermap.org/img/wn/${imageFiveId}@2x.png`;

                    dayZeroIcon.innerHTML = `<img src='${imageZeroUrl}' /><p>Expect ${descriptionZero}.</p>`;
                    dayOneIcon.innerHTML = `<img src='${imageOneUrl}' /><p>Expect ${descriptionOne}.</p>`;
                    dayTwoIcon.innerHTML = `<img src='${imageTwoUrl}' /><p>Expect ${descriptionTwo}.</p>`;
                    dayThreeIcon.innerHTML = `<img src='${imageThreeUrl}' /><p>Expect ${descriptionThree}.</p>`;
                    dayFourIcon.innerHTML = `<img src='${imageFourUrl}' /><p>Expect ${descriptionFour}.</p>`;
                    dayFiveIcon.innerHTML = `<img src='${imageFiveUrl}' /><p>Expect ${descriptionFive}.</p>`;

                    let dateTwo = json.list[15].dt_txt;
                    let dateThree = json.list[23].dt_txt;
                    let dateFour = json.list[31].dt_txt;
                    let dateFive = json.list[39].dt_txt;

                    dayTwoDate.innerHTML = `${dateTwo} Eastern`;
                    dayThreeDate.innerHTML = `${dateThree} Eastern`;
                    dayFourDate.innerHTML = `${dateFour} Eastern`;
                    dayFiveDate.innerHTML = `${dateFive} Eastern`;

                    let tempKelvinZero = json.list[0].main.temp;
                    let tempKelvinOne = json.list[7].main.temp;
                    let tempKelvinTwo = json.list[15].main.temp;
                    let tempKelvinThree = json.list[23].main.temp;
                    let tempKelvinFour = json.list[31].main.temp;
                    let tempKelvinFive = json.list[39].main.temp;

                    let tempFahrenheitZero = convertToFahrenheit(tempKelvinZero);
                    let tempFahrenheitOne = convertToFahrenheit(tempKelvinOne);
                    let tempFahrenheitTwo = convertToFahrenheit(tempKelvinTwo);
                    let tempFahrenheitThree = convertToFahrenheit(tempKelvinThree);
                    let tempFahrenheitFour = convertToFahrenheit(tempKelvinFour);
                    let tempFahrenheitFive = convertToFahrenheit(tempKelvinFive);

                    dayZeroTemp.innerHTML = `${tempFahrenheitZero}&deg;F`;
                    dayOneTemp.innerHTML = `${tempFahrenheitOne}&deg;F`;
                    dayTwoTemp.innerHTML = `${tempFahrenheitTwo}&deg;F`;
                    dayThreeTemp.innerHTML = `${tempFahrenheitThree}&deg;F`;
                    dayFourTemp.innerHTML = `${tempFahrenheitFour}&deg;F`;
                    dayFiveTemp.innerHTML = `${tempFahrenheitFive}&deg;F`;

                    let humidityZero = json.list[0].main.humidity;
                    let humidityOne = json.list[7].main.humidity;
                    let humidityTwo = json.list[15].main.humidity;
                    let humidityThree = json.list[23].main.humidity;
                    let humidityFour = json.list[31].main.humidity;
                    let humidityFive = json.list[39].main.humidity;

                    dayZeroHumidity.innerHTML = `${humidityZero}% humidity`;
                    dayOneHumidity.innerHTML = `${humidityOne}% humidity`;
                    dayTwoHumidity.innerHTML = `${humidityTwo}% humidity`;
                    dayThreeHumidity.innerHTML = `${humidityThree}% humidity`;
                    dayFourHumidity.innerHTML = `${humidityFour}% humidity`;
                    dayFiveHumidity.innerHTML = `${humidityFive}% humidity`;

                    let windSpeedZero = json.list[0].wind.speed;
                    let windSpeedOne = json.list[7].wind.speed;
                    let windSpeedTwo = json.list[15].wind.speed;
                    let windSpeedThree = json.list[23].wind.speed;
                    let windSpeedFour = json.list[31].wind.speed;
                    let windSpeedFive = json.list[39].wind.speed;

                    dayZeroWindSpeed.innerHTML = `${windSpeedZero} mph wind`;
                    dayOneWindSpeed.innerHTML = `${windSpeedOne} mph wind`;
                    dayTwoWindSpeed.innerHTML = `${windSpeedTwo} mph wind`;
                    dayThreeWindSpeed.innerHTML = `${windSpeedThree} mph wind`;
                    dayFourWindSpeed.innerHTML = `${windSpeedFour} mph wind`;
                    dayFiveWindSpeed.innerHTML = `${windSpeedFive} mph wind`;
                });

        })
    }
};

function clearSearchHistory() {
    let previousSearches = [];
    localStorage.setItem('previousSearches', JSON.stringify(previousSearches));
    searchHistory.empty;
    populateSearchHistory();
};

// Event listners

searchButton.addEventListener('click', function (e) {
    e.preventDefault();
    if (searchedCity.value !== '') {
        addToSearchHistory();
        populateWeather();
        populateSearchHistory();
    } else {
        validContainer.textContent = 'Please input a city or zipcode.';
        setTimeout(function () {
            validContainer.textContent = '';
        }, 2500);
    }

});

clearHistoryButton.addEventListener('click', function (e) {
    e.preventDefault();
    clearSearchHistory();
    populateSearchHistory();
});

// Call Functions

startPage();
