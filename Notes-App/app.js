// const chalk = require("chalk");
const yargs = require("yargs");
// const getNotes = require("./notes");

// console.log(chalk.red.bgYellow(getNotes()));
// const argv = yargs.argv;
// console.log(argv._[0]);
// console.log(argv.title);
// console.log(argv.name);

// Argument parsing with yargs

yargs.version("1.1.3"); // customize yargs version

// to add the add command
yargs.command({
    command: "add",
    describe: "To add a note",
    builder:{
        title:{
            describe: "Add a note title",
            demandOption: true,
            type: "string"
        },
        body:{
            describe: "Add a note body",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv)=>{
        // console.log("Hi there, adding notes!!");
        console.log(argv.title);
        console.log(argv.body.length);
    }
})

// to add the remove command
yargs.command({
    command: "remove",
    describe : "To remove a note",
    handler: (argv)=> {
        // console.log("Hi there, removing a note!!")
        console.log(argv.title);
    }
})

// to add the list command 
yargs.command({
    command: "list",
    describe: "To list all the notes",
    handler: ()=>{
        // console.log("Hi there, listing all notes!!");
    }
})

// to add the read command
yargs.command({
    command: "read",
    describe: "To read a particular note",
    handler: (argv)=> {
        // console.log("Hi there, displaying this particular note requested!!");
        console.log(argv.title);
    }
})

yargs.parse();




// console.log(process.argv);
