var request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true)

request.send();

try
{
    request.onload = function()
    {
        var countrydata = JSON.parse(this.response);
        console.log(countrydata[0].name);
        var AsianCountries = countrydata.filter(obj => 
        {
            if(obj.region === 'Asia')
            {
                return obj.name;
            }
        });
       console.log(AsianCountries.map(asian => asian.name));
    }
}
catch(err)
{
    console.log(err);
}