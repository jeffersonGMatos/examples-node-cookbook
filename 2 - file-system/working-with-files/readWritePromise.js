const path = require('path')
const fs = require('fs').promises

const filepath = path.join(process.cwd(), "hello.txt")

async function run() {
    try {
        const contents = await fs.readFile(filepath, 'utf-8')//.then(contents => console.log(`File contents: \n ${contents}`))
        console.log(`File contents: \n ${contents}`)
    } catch(error) {
        console.error(error)
    }
}

run()