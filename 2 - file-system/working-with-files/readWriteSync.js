const fs = require("fs");
const path = require("path");

const filepath = path.join(process.cwd(), "hello.txt");
let content = fs.readFileSync(filepath, 'utf8')

console.log(`File content: \n ${content}`)


let upperContent = content.toUpperCase()
fs.writeFileSync(filepath, upperContent)
console.log(`File updated`)