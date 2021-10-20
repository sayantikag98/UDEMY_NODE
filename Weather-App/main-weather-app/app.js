// const request = require("util").promisify(require("postman-request"));

// const dataAccess = async () => {
//     try{
//         const locationUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/2%20Lincoln%20Memorial%20Circle%20NW.json?access_token=pk.eyJ1Ijoic2F5YW50aWthZyIsImEiOiJja3V5Yzg4YnowMDhuMm5tdnFwamg3YWgyIn0.JcChVGBhUtrSvOyHlAPvfA";
//         const locationResponse = await request({url:locationUrl, json: true});
//         const locationData = locationResponse.body;
//         if(locationData.error)
//             console.log(locationData.error.info);
//         else{
//             const longitude = locationData.features[0].center[0];
//             const latitude = locationData.features[0].center[1];
//             console.log(longitude, latitude);
//             const weatherUrl = `http://api.weatherstack.com/current?access_key=d2b08774e2c780929ebae00cfdfd9751&query=jhjjhj,jnjnnj&units=f`;
//             const weatherResponse = await request({url: weatherUrl, json: true});
//             const weatherData = weatherResponse.body;
//             if(weatherData.error)
//                 console.log(weatherData.error.info);
//             else{
//                 const currentUnit = weatherData.request.unit;
//                 const unit = currentUnit === "m" ? "\u00B0C" : (currentUnit === "s" ? "K" : "\u00B0F");
//                 console.log(`Today's weather forecast for ${weatherData.location.region}, ${weatherData.location.country} is ${weatherData.current.weather_descriptions[0]}. The temperature is ${weatherData.current.temperature}${unit}.`);
//             }
//         }
//     }
//     catch(error){
//         console.log("Please check the internet connection.");
//     }
// };

// dataAccess();

const request = require("util").promisify(require("postman-request"));
const chalk = require("chalk");

const locationFunc = async (locationUrl, weatherUrl, weatherFunc, currentUnit) => {
    try{
        const locationResponse = await request({url: locationUrl, json: true});
        const locationData = locationResponse.body;
        if(locationData.error){
            console.log(chalk.red.inverse(locationData.error.info));
        }
        else{
            const longitude = locationData.features[0].center[0];
            const latitude = locationData.features[0].center[1];
            weatherFunc(latitude, longitude, weatherUrl, currentUnit);
        }      
    }
    catch(error){
        console.log(chalk.red.inverse("Please check the internet connection."));
    }
};

const weatherFunc = async (latitude, longitude, weatherUrl, currentUnit) => {
    weatherUrl += `&query=${latitude},${longitude}&units=${currentUnit}`;
    const weatherResponse = await request({url: weatherUrl, json: true});
    const weatherData = weatherResponse.body;
    if(weatherData.error){
        console.log(chalk.red.inverse(weatherData.error.info));
    }
    else{
        const unit = currentUnit === "m" ? "\u00B0C" : (currentUnit === "s" ? "K" : "\u00B0F");
        console.log(`Today's weather forecast for ${weatherData.location.region}, ${weatherData.location.country} is ${weatherData.current.weather_descriptions[0]}. The temperature is ${weatherData.current.temperature}${unit}.`); 
    }
};

const locationUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Kolkata.json?access_token=pk.eyJ1Ijoic2F5YW50aWthZyIsImEiOiJja3V5Yzg4YnowMDhuMm5tdnFwamg3YWgyIn0.JcChVGBhUtrSvOyHlAPvfA";
let weatherUrl = "http://api.weatherstack.com/current?access_key=d2b08774e2c780929ebae00cfdfd9751";
const currentUnit = "f";

locationFunc(locationUrl, weatherUrl, weatherFunc, currentUnit);