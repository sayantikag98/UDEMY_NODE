import fetch from "node-fetch";
const url = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=6ea1e48000aa00c41a2f3f61ae9c0cc8";

const weatherData = async () => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.list[0].main.temp);
    }
    catch(error){
        console.log(error);
    }
};

weatherData();