const fs = require("fs");


// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday"
// };

// fs.writeFileSync("practice-data.json", JSON.stringify(book));

// toString() => buffer data to string
// JSON.parse() => string of object to object
// const data = JSON.parse(fs.readFileSync("practice-data.json").toString());
// console.log(data, data.title, data.author);


const data = JSON.parse(fs.readFileSync("practice-data.json","utf-8"));
data.name = "Sayantika";
data.age = 23;
fs.writeFileSync("practice-data.json", JSON.stringify(data));


