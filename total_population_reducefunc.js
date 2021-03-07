var request = new XMLHttpRequest();

request.open("GET",'https://restcountries.eu/rest/v2/all',true)

request.send();

request.onload = function()
{
    var countrydata = JSON.parse(this.response);
    var total_population = countrydata.reduce(function(acc,curr){return acc + curr.population},0)
    console.log("The total population is " +total_population);
}