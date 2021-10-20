const request = require("util").promisify(require("postman-request"));

const weatherDataAccess = async () => {
    try{
        const url = "http://api.openweathermap.org/data/2.5/forecast?q=Kolkata&appid=6ea1e48000aa00c41a2f3f61ae9c0cc8&lang=kr";
        const response = await request({url, json: true});
        const data = response.body;
        console.log(data.city);

    }
    catch(error){
        console.log(error);
    }
};

weatherDataAccess();