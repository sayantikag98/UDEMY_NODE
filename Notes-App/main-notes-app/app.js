const yargs = require("yargs");
const {listNotes, addNotes, removeNotes, readParticularNote} = require("./notes");

// to add the add command
yargs.command({
    command: "add",
    describe: "To add a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }   
    },
    handler(argv){
        addNotes(argv.title, argv.body);
    }
})

// to add the remove command
yargs.command({
    command: "remove",
    describe: "To delete a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        removeNotes(argv.title);
    }
})

// to add the list command
yargs.command({
    command: "list",
    describe: "To list all the notes",
    handler(argv){
        listNotes();
    }
})

// to add the read command
yargs.command({
    command: "read",
    describe: "To read a particular note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        readParticularNote(argv.title);    
    }
})


yargs.version("1.1.2"); //to customize the yargs version
yargs.parse();