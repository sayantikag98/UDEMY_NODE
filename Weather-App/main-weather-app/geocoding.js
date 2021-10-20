const request = require("util").promisify(require("postman-request"));

const dataAccess = async () => {
    try{
        const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/2%20Lincoln%20Memorial%20Circle%20NW.json?access_token=pk.eyJ1Ijoic2F5YW50aWthZyIsImEiOiJja3V5Yzg4YnowMDhuMm5tdnFwamg3YWgyIn0.JcChVGBhUtrSvOyHlAPvfA";
        const response = await request({url, json: true});
        const data = response.body;
        console.log(data.features[0].center[0], data.features[0].center[1]);

    }
    catch(error){
        console.log(error);
    }
};

dataAccess();