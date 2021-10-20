const request = require("util").promisify(require("postman-request"));

const dataAccess = async () => {
    try{
        const locationUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/2%20Lincoln%20Memorial%20Circle%20NW.json?access_token=pk.eyJ1Ijoic2F5YW50aWthZyIsImEiOiJja3V5Yzg4YnowMDhuMm5tdnFwamg3YWgyIn0.JcChVGBhUtrSvOyHlAPvfA";
        const locationResponse = await request({url:locationUrl, json: true});
        const locationData = locationResponse.body;
        const longitude = locationData.features[0].center[0];
        const latitude = locationData.features[0].center[1];
        console.log(longitude, latitude);
        const weatherUrl = `http://api.weatherstack.com/current?access_key=d2b08774e2c780929ebae00cfdfd9751&query=${latitude},${longitude}&units=f`;
        const weatherResponse = await request({url: weatherUrl, json: true});
        const weatherData = weatherResponse.body;
        const currentUnit = weatherData.request.unit;
        const unit = currentUnit === "m" ? "\u00B0C" : (currentUnit === "s" ? "K" : "\u00B0F");
        console.log(`Today's weather forecast for ${weatherData.location.region}, ${weatherData.location.country} is ${weatherData.current.weather_descriptions[0]}. The temperature is ${weatherData.current.temperature}${unit}.`);
    }
    catch(error){
        console.log(error);
    }
};

dataAccess();