const fs = require("fs");
const moment = require("moment")

const file = "./file.txt"

// watch file changes
fs.watchFile(file, (current, previous) => {
    const time = moment(current.mtime).format("MMMM Do YYYY, h:mm:ss a");
    return console.log(`${file} updated ${(time)}`, current)
})

fs.watch(file, (eventType, filename) => {
    console.log(eventType, filename) 
})