const fs = require("fs");
const chalk = require("chalk");

const comparator = (ele1, ele2) => ele1.title<ele2.title;

const readNotes = () => {
    if(fs.existsSync("data.json"))
        return JSON.parse(fs.readFileSync("data.json", "utf-8")).sort(comparator);
    return [];
};

const writeNotes = notes => {
    fs.writeFileSync("data.json", JSON.stringify(notes));
};

const addNotes = (title, body) => {
    const notes = readNotes();
    const notesCopy = notes.find(ele=>ele.title === title);
    if(notesCopy){
        console.log(chalk.red.inverse("Note title already exists. Please choose another title."));
    }
    else{
        notes.push({
            title,
            body
        })
        writeNotes(notes);
        console.log(chalk.green.inverse("New note added"));
    }    
}

const removeNotes = title => {
    const notes = readNotes();
    if(notes.filter(ele => ele.title===title).length === 0){
        console.log(chalk.red.inverse("No such note exists"));
    }
    else{
        writeNotes(notes.filter(ele => ele.title!==title));
        console.log(chalk.green.inverse("Note removed"));
    }
};

const listNotes = () => {
    const notes = readNotes();
    if(notes.length === 0){
        console.log(chalk.red.inverse("There is no note in the list"));
    }
    else{
        console.log(chalk.cyan.inverse("Your notes"));
        let counter = 1;
        notes.forEach(note => {
            console.log(`${chalk.red.inverse(counter+".")} ${chalk.yellow.inverse(note.title)}`);
            counter++;
        });
    }
};

const readParticularNote = title => {
    const notes = readNotes();
    const note =  notes.find(ele => ele.title === title);
    if(note){
        console.log(chalk.yellow.inverse(note.title));
        console.log(chalk.cyan.inverse(note.body));
    }
    else console.log(chalk.red.inverse("No such note exists"));
}

module.exports = {listNotes, addNotes, removeNotes, readParticularNote};