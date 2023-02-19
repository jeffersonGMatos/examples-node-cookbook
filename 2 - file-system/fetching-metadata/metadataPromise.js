const fs = require("fs/promises")
const constants = require('fs').constants
const file = process.argv[2]

async function printMetadata(file) {
    try {
        // reject if has not permission
        await fs.access(file)
        
        // change file permission
        await fs.chmod(file, constants.S_IRUSR | constants.S_IWUSR | constants.S_IRGRP | constants.S_IWGRP | constants.S_IROTH)
        await fs.chmod(file, 0o664)

        // prints file metadata
        const filestats = await fs.stat(file)
        console.log(filestats)
    } catch (e) {
        console.error(`Error reading file path:`, file)
    }
}

Promise.resolve(printMetadata(file))