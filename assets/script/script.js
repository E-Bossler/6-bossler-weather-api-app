// DOM Elements 

let searchedCity = document.querySelector('#citySearch');

const dayZeroDate = document.querySelector('#dayZeroDate');
const dayZeroIcon = document.querySelector('#dayZeroIcon');
const dayZeroTemp = document.querySelector('#dayZeroTemp');
const dayZeroHumidity = document.querySelector('#dayZeroHumidity');
const dayZeroWindSpeed = document.querySelector('#dayZeroWindSpeed');
const dayZeroUVIndex = document.querySelector('#dayZeroUVIndex');

const dayOneDate = document.querySelector('#dayOneDate');
const dayOneIcon = document.querySelector('#dayOneIcon');
const dayOneTemp = document.querySelector('#dayOneTemp');
const dayOneHumidity = document.querySelector('#dayOneHumidity');
const dayOneWindSpeed = document.querySelector('#dayOneWindSpeed');
const dayOneUVIndex = document.querySelector('#dayOneUVIndex');

const dayTwoDate = document.querySelector('#dayTwoDate');
const dayTwoIcon = document.querySelector('#dayTwoIcon');
const dayTwoTemp = document.querySelector('#dayTwoTemp');
const dayTwoHumidity = document.querySelector('#dayTwoHumidity');
const dayTwoWindSpeed = document.querySelector('#dayTwoWindSpeed');
const dayTwoUVIndex = document.querySelector('#dayTwoUVIndex');

const dayThreeDate = document.querySelector('#dayThreeDate');
const dayThreeIcon = document.querySelector('#dayThreeIcon');
const dayThreeTemp = document.querySelector('#dayThreeTemp');
const dayThreeHumidity = document.querySelector('#dayThreeHumidity');
const dayThreeWindSpeed = document.querySelector('#dayThreeWindSpeed');
const dayThreeUVIndex = document.querySelector('#dayThreeUVIndex');

const dayFourDate = document.querySelector('#dayFourDate');
const dayFourIcon = document.querySelector('#dayFourIcon');
const dayFourTemp = document.querySelector('#dayFourTemp');
const dayFourHumidity = document.querySelector('#dayFourHumidity');
const dayFourWindSpeed = document.querySelector('#dayFourWindSpeed');
const dayFourUVIndex = document.querySelector('#dayFourUVIndex');

const dayFiveDate = document.querySelector('#dayFiveDate');
const dayFiveIcon = document.querySelector('#dayFiveIcon');
const dayFiveTemp = document.querySelector('#dayFiveTemp');
const dayFiveHumidity = document.querySelector('#dayFiveHumidity');
const dayFiveWindSpeed = document.querySelector('#dayFiveWindSpeed');
const dayFiveUVIndex = document.querySelector('#dayFiveUVIndex');

const searchButton = document.querySelector('#searchButton');
const clearHistoryButton = document.querySelector('#clearButton')

const searchHistory = document.querySelector('#historyRow');
let thisCityDiv = document.querySelector('.pastCity')

// Global functions 

//need to load up a serach.. maybe my hometome?
function startPage() {
    populateSearchHistory();
    console.log('hello');
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
        });
};

//check previous class work for this
function convertToFahrenheit() {

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
    populateWeather();
    addToSearchHistory();
    populateSearchHistory();
});

clearHistoryButton.addEventListener('click', function (e) {
    e.preventDefault();
    clearSearchHistory();
    populateSearchHistory();
});

//this isn't workingi... need to define thisCityDiv outside of the fucntioni above 
thisCityDiv.addEventListener('click', function (e) {
    e.preventDefault();
    searchedCity = this.textContent;
    populateWeather();
})

// Call Functions

startPage();
