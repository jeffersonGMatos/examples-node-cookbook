const fs = require('fs')
const file = process.argv[2]

function printMetadata(file) {
    try {
        
    fs.access() // reject if has not permission

    const fifleStats = fs.statSync(file)
    console.log(fifleStats)
    } catch (error) {
        console.error(`Error reading file path:`, file)
    }
}

printMetadata(file)