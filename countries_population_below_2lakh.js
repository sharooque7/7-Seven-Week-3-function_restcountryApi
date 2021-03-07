var request = new XMLHttpRequest();

request.open('GET',"https://restcountries.eu/rest/v2/all",true);

request.send(); 

request.onload = function()
{
var countrydata = JSON.parse(this.response);

//Filtering countries less than 2lakh population
var population_below_2lakh = countrydata.filter(PopulationObj =>PopulationObj.population<200000)

console.log(population_below_2lakh.map(obj => obj.name));
}