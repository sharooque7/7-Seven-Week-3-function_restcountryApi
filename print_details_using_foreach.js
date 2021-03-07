var request = new XMLHttpRequest();

request.open('GET',"https://restcountries.eu/rest/v2/all",true)

request.send();

request.onload = function()
{
    var countrydata = JSON.parse(this.response);

    countrydata.forEach(element => {
        console.log(element.name);
        console.log(element.capital)
        console.log(element.flag);
    });
}