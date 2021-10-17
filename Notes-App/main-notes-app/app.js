const yargs = require("yargs");
const {listNotes, addNotes, removeNotes, readParticularNote} = require("./notes");

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

yargs.command({
    command: "list",
    describe: "To list all the notes",
    handler(argv){
        listNotes();
    }
})

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

yargs.parse();