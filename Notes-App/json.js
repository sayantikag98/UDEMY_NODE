const fs = require("fs");


// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday"
// };

// fs.writeFileSync("data.json", JSON.stringify(book));

// toString() => buffer data to string
// JSON.parse() => string of object to object
// const data = JSON.parse(fs.readFileSync("data.json").toString());
// console.log(data, data.title, data.author);


const data = JSON.parse(fs.readFileSync("data.json","utf-8"));
data.name = "Sayantika";
data.age = 23;
fs.writeFileSync("data.json", JSON.stringify(data));


