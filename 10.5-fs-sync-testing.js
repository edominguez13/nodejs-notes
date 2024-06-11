// Testing the sync or stopping code with console log


const  { readFileSync, writeFileSync } = require('fs')

console.log('start tasks'); // testing

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    { flag: 'a' }
)

console.log('done all tasks'); // testing
console.log('new task'); // testing

// When running this code we get:
/*
    PS C:\Dev\nodejs-notes> node 10.5-fs-sync-testing
    start tasks
    done all tasks
    new task
*/
// This means that node cannot do anything until all tasks are done