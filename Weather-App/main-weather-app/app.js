const request = require("util").promisify(require("postman-request"));


// NORMAL PROMISE SYNTAX

// request("http://api.weatherstack.com/current?access_key=d2b08774e2c780929ebae00cfdfd9751&query=New%20York")
// .then(response => response.body)
// .then(data => {
//     console.log(data);
// })
// .catch(err => {
//     console.log(err);
// })


// ASYNC-AWAIT SYNTAX
const asyncCall = async () => {
    try{
        const url = "http://api.weatherstack.com/current?access_key=d2b08774e2c780929ebae00cfdfd9751&query=New%20York";
        const response = await request({url, json: true});
        // below step is needed if json property is not specified to be true because response.body is a string and we convert it to javascript object using JSON.parse(response.body)
        // const data = JSON.parse(response.body); 
        const data = response.body;
        console.log(`It is currently ${data.current.temperature} degrees out. There is ${data.current.precip}% chance of rain.`);
    }

    catch(err){
        console.log(err);
    }
};

asyncCall();
