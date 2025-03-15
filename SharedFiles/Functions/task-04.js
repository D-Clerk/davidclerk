const initializeCityData = require("./pre-task.js");
// Function to generate random temperature data for a city
function generateRandomTemperatureData(city, minTemp, maxTemp) {
  let temperatureData = [];
  for (let i = 0; i < 7; i++) {
    let randomTemperature =
      Math.floor(Math.random() * (maxTemp - minTemp + 1)) + minTemp;
    temperatureData.push(randomTemperature);
  }
  
  return { city: city, temperatureData: temperatureData };
  
}
// Function to find the day with the highest temperature
function findDayWithHighestTemperature(temperatureData) {
  let highestTemp = temperatureData[0];  // Start by assuming the first day has the highest temperature
  let highestTempDay = 0;  // Start with the first day (index 0)

  // Loop through the rest of the temperature data
  for (let i = 0; i < temperatureData.length; i++) {
    if (temperatureData[i] > highestTemp) {
      highestTemp = temperatureData[i];  // Update highest temperature
      highestTempDay = i;  // Update the index of the day with the highest temperature
    }
  }

  return highestTempDay;  // Return the index of the day with the highest temperature
}

// Function to find the day with the lowest temperature
function findDayWithLowestTemperature(temperatureData) {
  let lowestTemp = temperatureData[0];  // Start by assuming the first day has the lowest temperature
  let lowestTempDay = 0;  // Start with the first day (index 0)

  // Loop through the rest of the temperature data
  for (let i = 0; i < temperatureData.length; i++) {
    if (temperatureData[i] < lowestTemp) {
      lowestTemp = temperatureData[i];  // Update lowest temperature
      lowestTempDay = i;  // Update the index of the day with the lowest temperature
    }
  }

  return lowestTempDay;  // Return the index of the day with the lowest temperature
}

// Function to get the highest and lowest temperature days for each city
function getHighestAndLowestDays(cityData) {
  // Loop over each city's data
  cityData.forEach(city => {
    // Find the day with the highest temperature
    let highestTempDay = findDayWithHighestTemperature(city.temperatureData);
    
    // Find the day with the lowest temperature
    let lowestTempDay = findDayWithLowestTemperature(city.temperatureData);
    
    // Log the results for the city
    console.log(`City: ${city.city}
    Highest: ${highestTempDay + 1} Lowest: ${lowestTempDay + 1}`); 
  });
}




// Don't change this line
module.exports = { initializeCityData, getHighestAndLowestDays };