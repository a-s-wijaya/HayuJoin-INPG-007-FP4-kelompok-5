var temp = {
	series: [{
		name: "Temprature (°C)",
		data: []
	}],
	chart: {
		id: 'temp',
		group: 'weather',
		type: 'line',
		height: 350,
		toolbar: {
			show: true
		},
	},
	xaxis: {
		categories: ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'],
        labels: {
            style: {
                colors: '#234cad',
            }
        }
	},
    yaxis: {
        labels: {
            style: {
                colors: '#234cad',
            }
        }
    },
	noData: {
		text: 'No City Inserted / No Data Available'
	},
	dataLabels: {
		enabled: true,
	},
	colors: ['#008FFB'],
	responsive: [{
		breakpoint: 576,
		options: {
			chart: {
				height: 250,
				toolbar: {
					show: false
				}
			},
			xaxis: {
				categories: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
			}
		}
	}]
};

var hum = {
	series: [{
		name: "Humidity (%)",
		data: []
	}],
	chart: {
		id: 'humid',
		group: 'weather',
		type: 'line',
		height: 350,
		toolbar: {
			show: false
		},
	},
	xaxis: {
		categories: ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'],
        labels: {
            style: {
                colors: '#234cad',
            }
        }
	},
    yaxis: {
        labels: {
            style: {
                colors: '#234cad',
            }
        }
    },
	noData: {
		text: 'No City Inserted / No Data Available'
	},
	dataLabels: {
		enabled: true,
	},
	colors: ['#FF4560'],
	responsive: [{
		breakpoint: 576,
		options: {
			chart: {
				height: 250,
				toolbar: {
					show: false
				}
			},
			xaxis: {
				categories: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
			}
		}
	}]
};

var wind = {
	series: [{
		name: "Wind (km/h)",
		data: []
	}],
	chart: {
		id: 'wind',
		group: 'weather',
		type: 'line',
		height: 350,
		toolbar: {
			show: false
		},
	},
	xaxis: {
		categories: ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'],
        labels: {
            style: {
                colors: '#234cad',
            }
        }
	},
    yaxis: {
        labels: {
            style: {
                colors: '#234cad',
            }
        }
    },
	noData: {
		text: 'No City Inserted / No Data Available'
	},
	dataLabels: {
		enabled: true,
	},
	colors: ['#00E396'],
	responsive: [{
		breakpoint: 576,
		options: {
			chart: {
				height: 250,
				toolbar: {
					show: false
				}
			},
			xaxis: {
				categories: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
			}
		}
	}]
};

var press = {
	series: [{
		name: "Pressure (mbar)",
		data: []
	}],
	chart: {
		id: 'pressure',
		group: 'weather',
		type: 'line',
		height: 350,
		toolbar: {
			show: false
		},
	},
	xaxis: {
		categories: ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'],
        labels: {
            style: {
                colors: '#234cad',
            }
        }
	},
    yaxis: {
        labels: {
            style: {
                colors: '#234cad',
            }
        }
    },
	noData: {
		text: 'No City Inserted / No Data Available'
	},
	dataLabels: {
		enabled: true,
	},
	colors: ['#FFB64D'],
	responsive: [{
		breakpoint: 576,
		options: {
			chart: {
				height: 250,
				toolbar: {
					show: false
				}
			},
			xaxis: {
				categories: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
			}
		}
	}]
};

var chartTemp = new ApexCharts(document.querySelector("#chartTemp"), temp);
var chartHum = new ApexCharts(document.querySelector("#chartHum"), hum);
var chartWind = new ApexCharts(document.querySelector("#chartWind"), wind);
var chartPress = new ApexCharts(document.querySelector("#chartPress"), press);

var dateInput = document.getElementById('dateInput');
dateInput.setAttribute('max', new Date().toISOString().split("T")[0]);
dateInput.setAttribute('min', new Date(new Date().setDate(new Date().getDate() - 7)).toISOString().split("T")[0]);
var submitWeather = document.getElementById('submitWeather');
var chartToggler = document.getElementById('chartToggler');

chartToggler.addEventListener('click', function() {
	if (chartToggler.classList.contains('btn-primary')) {
		chartToggler.classList.remove('btn-primary');
		chartToggler.classList.add('btn-secondary');
		chartToggler.innerHTML = 'Hide Chart';
	}else if (chartToggler.classList.contains('btn-secondary')) {
		chartToggler.classList.remove('btn-secondary');
		chartToggler.classList.add('btn-primary');
		chartToggler.innerHTML = 'Show Chart';
	}
});

const loader = document.querySelector('#loading');

function displayLoading() {
	loader.classList.add('display');
	setTimeout(() => {
		loader.classList.remove('display');
	}, 5000)
}

function hideLoading() {
	loader.classList.remove('display');
}

submitWeather.addEventListener('submit', function(e) {
	if(document.getElementById('cityInput').value == '' || document.getElementById('cityInput').value == null) {
		alert('Please enter a city name');
	} else {
		e.preventDefault();
		displayLoading();
		var date = new Date();
		var hours = date.getHours();
		var time = hours + ':00:00';
		var cityInput = document.getElementById('cityInput').value;
		
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '33f90e955emshc76eea47fe95e21p194c25jsn990432385cd5',
				'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
			}
		};
		
		fetch(`https://weatherapi-com.p.rapidapi.com/history.json?q=${cityInput}&dt=${dateInput.value}&lang=en`, options)
		.then(response => response.json())
		.then(response => {
			hideLoading();
			if(response.error){
				const toast = new bootstrap.Toast(notFound)
				inputResult.innerHTML = cityInput;
				toast.show()
			} else {
                var cName = response.location.name;
                var cNameLow = cName.toLowerCase();
                var mainCityInfo = document.getElementById('mainCityInfo');
                var currentWeather = document.getElementById('currentWeather');
                currentWeather.style.width = '250px';
				var cloudCondition = response.forecast.forecastday[0].hour[hours].condition.text;
				if(cloudCondition.includes('Cloudy') || cloudCondition.includes('cloudy')) {
					document.body.style.backgroundImage = "url(../assets/Background/Cloudy.webp)";
                    currentWeather.src = '../assets/Icon/Cloudy.png';
                    mainCityInfo.innerHTML = `
                    <h2 class="display-4 fw-bold mb-3">${response.location.name}</h2>
                    <p>${response.location.name} is a place located in ${response.location.region}, ${response.location.country}. At this moment, ${response.location.name} is curently ${response.forecast.forecastday[0].hour[hours].condition.text}  <img src="${response.forecast.forecastday[0].hour[hours].condition.icon}" alt="Condition Weather" width="25px">.</p>
                    <p>On a clody day, you can:.</p>
                    <ul class="list-group list-group-flush mb-2">
                        <li class="list-group-item">Play board game</li>
                        <li class="list-group-item">Watch movie</li>
                        <li class="list-group-item">Read a book</li>
                    </ul>
                    <p>and other, make sure to bring umbrella just in case it started to rain, have a good day!</p>
                    <a href="https://www.google.com/search?q=${cNameLow}" class="btn btn-primary fw-semibold rounded-5 px-5 me-2 fs-5" target="_blank" rel="noopener noreferrer">Learn More About ${response.location.name}</a>
                    `;
				} else if(cloudCondition.includes('Sunny') || cloudCondition.includes('sunny')) {
					document.body.style.backgroundImage = "url(../assets/Background/Sunny.webp)";
                    currentWeather.src = '../assets/Icon/Sunny.png';
                    mainCityInfo.innerHTML = `
                    <h2 class="display-4 fw-bold mb-3">${response.location.name}</h2>
                    <p>${response.location.name} is a place located in ${response.location.region}, ${response.location.country}. At this moment, ${response.location.name} is curently ${response.forecast.forecastday[0].hour[hours].condition.text}  <img src="${response.forecast.forecastday[0].hour[hours].condition.icon}" alt="Condition Weather" width="25px">.</p>
                    <p>On a sunny day, you can:</p>
                    <ul class="list-group list-group-flush mb-2">
                        <li class="list-group-item">Go to the beach</li>
                        <li class="list-group-item">Go to the park</li> 
                        <li class="list-group-item">Go to the mall</li>
                    </ul>
                    <p>and other, make sure to bring sunblock becuase it can get pretty hot, have a good day!</p>
                    <a href="https://www.google.com/search?q=${cNameLow}" class="btn btn-primary fw-semibold rounded-5 px-5 me-2 fs-5" target="_blank" rel="noopener noreferrer">Learn More About ${response.location.name}</a>
                    `;
				} else if(cloudCondition.includes('Rain') || cloudCondition.includes('rain')) {
					document.body.style.backgroundImage = "url(../assets/Background/Rain.webp)";
                    currentWeather.src = '../assets/Icon/Rain.png';
                    mainCityInfo.innerHTML = `
                    <h2 class="display-4 fw-bold mb-3">${response.location.name}</h2>
                    <p>${response.location.name} is a place located in ${response.location.region}, ${response.location.country}. At this moment, ${response.location.name} is curently ${response.forecast.forecastday[0].hour[hours].condition.text}  <img src="${response.forecast.forecastday[0].hour[hours].condition.icon}" alt="Condition Weather" width="25px">.</p>
                    <p>On a rainy day, you can:</p>
                    <ul class="list-group list-group-flush mb-2">
                        <li class="list-group-item">Play board game</li>
                        <li class="list-group-item">Watch movie</li>
                        <li class="list-group-item">Read a book</li>
                    </ul>
                    <p>bring umbrella in case you have to go outside, have a good day!</p>
                    <a href="https://www.google.com/search?q=${cNameLow}" class="btn btn-primary fw-semibold rounded-5 px-5 me-2 fs-5" target="_blank" rel="noopener noreferrer">Learn More About ${response.location.name}</a>
                    `;
				} else if(cloudCondition.includes('Clear') || cloudCondition.includes('clear')) {
					document.body.style.backgroundImage = "url(../assets/Background/Clear.webp)";
                    currentWeather.src = '../assets/Icon/Clear.png';
                    mainCityInfo.innerHTML = `
                    <h2 class="display-4 fw-bold mb-3">${response.location.name}</h2>
                    <p>${response.location.name} is a place located in ${response.location.region}, ${response.location.country}. At this moment, ${response.location.name} is curently ${response.forecast.forecastday[0].hour[hours].condition.text}  <img src="${response.forecast.forecastday[0].hour[hours].condition.icon}" alt="Condition Weather" width="25px">.</p>
                    <p>On a clear day, you can:</p>
                    <ul class="list-group list-group-flush mb-2">
                        <li class="list-group-item">Go to the beach</li>
                        <li class="list-group-item">Go to the park</li>
                        <li class="list-group-item">Go to the mall</li>
                    </ul>
                    <p>and other, make sure to bring sunblock becuase it can get pretty hot, have a good day!</p>
                    <a href="https://www.google.com/search?q=${cNameLow}" class="btn btn-primary fw-semibold rounded-5 px-5 me-2 fs-5" target="_blank" rel="noopener noreferrer">Learn More About ${response.location.name}</a>
                    `;
				} else if(cloudCondition.includes('Snow') || cloudCondition.includes('snow')) {
					document.body.style.backgroundImage = "url(../assets/Background/Snow.webp)";
                    currentWeather.src = '../assets/Icon/Snow.png';
                    mainCityInfo.innerHTML = `
                    <h2 class="display-4 fw-bold mb-3">${response.location.name}</h2>
                    <p>${response.location.name} is a place located in ${response.location.region}, ${response.location.country}. At this moment, ${response.location.name} is curently ${response.forecast.forecastday[0].hour[hours].condition.text}  <img src="${response.forecast.forecastday[0].hour[hours].condition.icon}" alt="Condition Weather" width="25px">.</p>
                    <p>On a snowy day, you can:</p>
                    <ul class="list-group list-group-flush mb-2">
                        <li class="list-group-item">Warm yourself up</li>
                        <li class="list-group-item">Make a snowman</li>
                        <li class="list-group-item">Go sledding</li>
                    </ul>
                    <p>and other, make sure to bring warm clothes, have a good day!</p>
                    <a href="https://www.google.com/search?q=${cNameLow}" class="btn btn-primary fw-semibold rounded-5 px-5 me-2 fs-5" target="_blank" rel="noopener noreferrer">Learn More About ${response.location.name}</a>
                    `;
				} else if(cloudCondition.includes('Thunder') || cloudCondition.includes('thunder')) {
					document.body.style.backgroundImage = "url(../assets/Background/Thunder.webp)";
                    currentWeather.src = '../assets/Icon/Thunder.png';
                    mainCityInfo.innerHTML = `
                    <h2 class="display-4 fw-bold mb-3">${response.location.name}</h2>
                    <p>${response.location.name} is a place located in ${response.location.region}, ${response.location.country}. At this moment, ${response.location.name} is curently ${response.forecast.forecastday[0].hour[hours].condition.text}  <img src="${response.forecast.forecastday[0].hour[hours].condition.icon}" alt="Condition Weather" width="25px">.</p>
                    <p>On a thundery day, you can:</p>
                    <ul class="list-group list-group-flush mb-2">
                        <li class="list-group-item">Stay inside</li>
                        <li class="list-group-item">Watch movie</li>
                        <li class="list-group-item">Read a book</li>
                    </ul>
                    <p>and other, make sure to bring umbrella in case you have to go outside, have a good day!</p>
                    <a href="https://www.google.com/search?q=${cNameLow}" class="btn btn-primary fw-semibold rounded-5 px-5 me-2 fs-5" target="_blank" rel="noopener noreferrer">Learn More About ${response.location.name}</a>
                    `;
				} else if(cloudCondition.includes('Overcast') || cloudCondition.includes('overcast')) {
					document.body.style.backgroundImage = "url(../assets/Background/Overcast.webp)";
                    currentWeather.src = '../assets/Icon/Overcast.png';
                    mainCityInfo.innerHTML = `
                    <h2 class="display-4 fw-bold mb-3">${response.location.name}</h2>
                    <p>${response.location.name} is a place located in ${response.location.region}, ${response.location.country}. At this moment, ${response.location.name} is curently ${response.forecast.forecastday[0].hour[hours].condition.text}  <img src="${response.forecast.forecastday[0].hour[hours].condition.icon}" alt="Condition Weather" width="25px">.</p>
                    <a href="https://www.google.com/search?q=${cNameLow}" class="btn btn-primary fw-semibold rounded-5 px-5 me-2 fs-5" target="_blank" rel="noopener noreferrer">Learn More About ${response.location.name}</a>
                    `;
				} else {
					document.body.style.backgroundImage = "url(../assets/Background/Unlisted.webp)";
                    currentWeather.src = '../assets/Icon/weather-png-9832.png';
                    mainCityInfo.innerHTML = `
                    <h2 class="display-4 fw-bold mb-3">${response.location.name}</h2>
                    <p>${response.location.name} is a place located in ${response.location.region}, ${response.location.country}. At this moment, ${response.location.name} is curently ${response.forecast.forecastday[0].hour[hours].condition.text}  <img src="${response.forecast.forecastday[0].hour[hours].condition.icon}" alt="Condition Weather" width="25px">.</p>
                    <a href="https://www.google.com/search?q=${cNameLow}" class="btn btn-primary fw-semibold rounded-5 px-5 me-2 fs-5" target="_blank" rel="noopener noreferrer">Learn More About ${response.location.name}</a>
                    `;
				}
				
                var cityName = document.getElementById('cityName');
                cityName.innerHTML = `${response.location.name} (${response.location.country})`;
				var cityData = document.getElementById('cityData');
				cityData.innerHTML = `
				<div class="col-md-4 mx-auto">
				<table class="table text-primary table-borderless">
				<tr>
				<th class="fw-semibold" scope="row">Condition</th>
				<td>: ${response.forecast.forecastday[0].hour[hours].condition.text} <img src="${response.forecast.forecastday[0].hour[hours].condition.icon}" alt="Condition Weather" width="25px"></td>
				</tr>
				<tr>
				<th class="fw-semibold" scope="row">Temperature</th>
				<td>: ${response.forecast.forecastday[0].hour[hours].temp_c}°C</td>
				</tr>
				<tr>
				<th class="fw-semibold" scope="row">Humidity</th>
				<td>: ${response.forecast.forecastday[0].hour[hours].humidity}%</td>
				</tr>
				</table>
				</div>
				<div class="col-md-4 mt-0 mx-auto">
				<table class="table text-primary table-borderless">
				<tr>
				<th class="fw-semibold" scope="row">Wind Speed</th>
				<td>: ${response.forecast.forecastday[0].hour[hours].wind_kph} km/h</td>
				</tr>
				<tr>
				<th class="fw-semibold" scope="row">Pressure</th>
				<td>: ${response.forecast.forecastday[0].hour[hours].pressure_mb} mbar</td>
				</tr>
				<tr>
				<th class="fw-semibold" scope="row">Access Time</th>
				<td>: ${time} (${dateInput.value})</td>
				</tr>
				</table>
				</div>`;
				var tempSeries = [];
				var humSeries = [];
				var windSeries = [];
				var pressSeries = [];
				for(var i = 0; i < 24; i++) {
					tempSeries[i] = response.forecast.forecastday[0].hour[i].temp_c;
					humSeries[i] = response.forecast.forecastday[0].hour[i].humidity;
					windSeries[i] = response.forecast.forecastday[0].hour[i].wind_kph;
					pressSeries[i]= response.forecast.forecastday[0].hour[i].pressure_mb;
				}
				chartTemp.updateSeries([{
					name: 'Temperature (°C)',
					data: tempSeries
				}]);
				chartHum.updateSeries([{
					name: 'Humidity (%)',
					data: humSeries
				}]);
				chartWind.updateSeries([{
					name: 'Wind Speed (km/h)',
					data: windSeries
				}]);
				chartPress.updateSeries([{
					name: 'Pressure (mbar)',
					data: pressSeries
				}]);
			}
		})
		.catch(err => console.error(err));
	}
});

window.addEventListener("scroll", muncul);
function muncul(){
    let items = document.querySelectorAll(".item");
    for (let i = 0; i < items.length; i++){
        let Tlayar = window.innerHeight;
        let Jitem = items[i].getBoundingClientRect().top;
        let Uscrol = 150;
        if ( Jitem < Tlayar - Uscrol){
            items[i].classList.add("tampil");
        } else{
            items[i].classList.remove("tampil")
        }
    }
}

window.onload = function() {
	chartTemp.render();
	chartHum.render();
	chartWind.render();
	chartPress.render();
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0');
	var yyyy = today.getFullYear();
	today = yyyy + '-' + mm + '-' + dd;
	dateInput.value = today;
    feather.replace()
}