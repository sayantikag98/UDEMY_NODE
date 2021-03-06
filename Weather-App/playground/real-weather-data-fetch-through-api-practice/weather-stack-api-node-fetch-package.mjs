import fetch from "node-fetch";
const url = "http://api.weatherstack.com/current?access_key=d2b08774e2c780929ebae00cfdfd9751&query=Kolkata";

// to ignore warnings use node --no-warnings FILE_NAME

const dataRetriever = async () => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(`Today's temperatue at ${data.location.region}, ${data.location.country} is ${data.current.temperature}`);
    }
    catch(err){
        console.log(err);
    }
};

dataRetriever();