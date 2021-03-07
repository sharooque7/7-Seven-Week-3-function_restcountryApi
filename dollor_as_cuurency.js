var request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true)

request.send();

request.onload = function()
{
    var countrydata = JSON.parse(this.response);

    var dollor = countrydata.filter(ele => ele.currencies[0].symbol==='$')
    console.log(dollor.map(x=>x.name));
}