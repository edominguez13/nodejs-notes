// File system

// comes in two flavors async non-blocking, and sync that is blocking

// later in the course we will see the best use cases for the two options

// sync method
const  { readFileSync, writeFileSync } = require('fs') // the names placed inside the curly brackets are not random those methods exist in the fs object 
    // could also be:
    const fs = require('fs')
    // fs.readFileSync
    // fs.writeFileSync

console.log(fs);

// we created two files inside the content folder: first.txt and second.txt

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first, second);

// now create a new file: result-sync.txt

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    { flag: 'a' } // this flag means 'append', and will make the new text be added to the previous content, not overwrite it
)

// if the file doesnt exist, node will create it.

// if we want to append we have to add a flag.

// The problem with this code is that if we have more than one user that want to read files, we will not be able to serve other users until the task of the first user are not
// This is why sync code is stopping code