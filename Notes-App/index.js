const getNotes = require("./notes");
const validator = require("validator");
const chalk = require("chalk");
const fs = require("fs");

// fs.writeFileSync("outputTextFile.txt", "Hello World");
// fs.appendFileSync("outputTextFile.txt", "\nHello Sayantika");
// fs.appendFileSync("outputTextFile.txt", "\nHello Sayantika");


// console.log(getNotes());

// console.log(validator.isEmail("sayantikagmail.com"));
// console.log(validator.isURL("https://google.com"));
// console.log(validator.equals("Sayantika", "Saantika"));


// console.log(chalk.red("Hello World"));
// console.log(chalk.bgYellow.cyan.bold.inverse(("Hello"), chalk.red("Sayantika")));



const obj = {
    age: 23,
    nameList: ["andrew"],
    printName(){
        const that = this;
        this.nameList.forEach(function(name){
            console.log(chalk.cyan.inverse(`Hello ${name} and your age is ${that.age}`));
            console.log(that);
            console.log(this);
        })   
    }
}

obj.printName();


