const yargs = require("yargs");
const {listNotes, addNotes, removeNotes, readParticularNote, editNoteTitle, editNoteBody, editWholeNote} = require("./notes");

// to add the add command
// to run node app add --title="some string" --body="some string"

debugger; // node debugger

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
// to run node app remove --title="some string" 
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
// to run node app list
yargs.command({
    command: "list",
    describe: "To list all the notes",
    handler(argv){
        listNotes();
    }
})

// to add the read command
// to run node app read --title="some string" 
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

yargs.command({
    command: "edit-title",
    describe: "To change the title",
    builder: {
        oldTitle: {
            describe: "Note old title",
            demandOption: true,
            type: "string"       
        },
        newTitle: {
            describe: "Note new title",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        editNoteTitle(argv.oldTitle, argv.newTitle);
    }
})

yargs.command({
    command: "edit-body",
    describe: "To change the note body",
    builder: {
        oldTitle: {
            describe: "Note old title",
            demandOption: true,
            type: "string"       
        },
        newBody: {
            describe: "Note new body",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        editNoteBody(argv.oldTitle, argv.newBody);
    }
})

yargs.command({
    command: "edit-whole-note",
    describe: "To change both the title and the body of the note",
    builder: {
        oldTitle: {
            describe: "Note old-title",
            demandOption: true,
            type: "string"
        },
        newTitle: {
            describe: "Note new title",
            demandOption: true,
            type: "string"
        },
        newBody: {
            describe: "Note new body",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        editWholeNote(argv.oldTitle, argv.newTitle, argv.newBody);
    }
})




yargs.version("1.1.2"); //to customize the yargs version
yargs.parse();