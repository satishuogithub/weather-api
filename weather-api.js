let inputEl = document.getElementById('cityInputId');


 /* function displayResults(jsObjectData){
    
		/* let displayTemperatureDiv = document.getElementById('temperatureDataId');
    let displayTemperatureParaEl = document.createElement('p');
    displayTemperatureDiv.appendChild(displayTemperatureParaEl);
    displayTemperatureParaEl.classList.add('card-title');
    //displayTemperatureDiv.textContent = '';
    displayTemperatureParaEl.textContent = 'Temperature is ' + jsObjectData.temp + '  Degree Celcius';
    
    
    }
    

}  */

function displayResults(jsObjectData) {

      let displayTemperatureDiv = document.getElementById('temperatureDataId');

      // Clear previous data
      while (displayTemperatureDiv.firstChild) {
        displayTemperatureDiv.removeChild(displayTemperatureDiv.firstChild);
      }

      let displayTemperatureParaEl = document.createElement('p');
      displayTemperatureDiv.appendChild(displayTemperatureParaEl);
      displayTemperatureParaEl.classList.add('card-title');
      displayTemperatureParaEl.textContent = 'Temperature is ' + jsObjectData.temp + '  Degree Celcius';

      let displayWindSpeedDiv = document.getElementById('windDataId');

      while(displayWindSpeedDiv.firstChild){
         displayWindSpeedDiv.removeChild(displayWindSpeedDiv.firstChild);   
      }

      let displayWindSpeedParaEl = document.createElement('p');
      displayWindSpeedDiv.appendChild(displayWindSpeedParaEl);
      displayWindSpeedParaEl.classList.add('card-title');
      displayWindSpeedParaEl.textContent = 'Wind Speed is '+ jsObjectData.wind_speed + ' km/hour';

      let displayHumidityDiv = document.getElementById('humidityDataId');
      
      while(displayHumidityDiv.firstChild){
          displayHumidityDiv.removeChild(displayHumidityDiv.firstChild);
      }

      let displayHumidityparaEl = document.createElement('p');

      displayHumidityDiv.appendChild(displayHumidityparaEl);

      displayHumidityparaEl.classList.add('card-title');

      displayHumidityparaEl.textContent = 'Humidity is '+ jsObjectData.humidity + ' %';




}


function getData(eventObject) {
  if (eventObject.key === 'Enter') {
    let inputElValue = inputEl.value;
	console.log(inputElValue);
    let url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + inputElValue;
    let options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '58b29117f6mshc96d6a4d19e7358p1d14b2jsnb3585bcc6217',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
    
    fetch(url, options)
      .then(function(r) {
        return r.json();
      })
      .then(function(jsObjectData) {
        displayResults(jsObjectData);
		//console.log(jsObjectData);
      });
  }
}

inputEl.addEventListener('keydown', getData);
