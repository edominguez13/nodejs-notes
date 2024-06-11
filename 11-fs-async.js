// async method
const  { readFile, writeFile } = require('fs')

// When using async, we have to provide a 'call back'
// The call back is invoked when the async functionality is done

readFile(
    './content/first.txt', // the path of the file
    'utf8', // if we don't specify the format, we will get a buffer, that is an un readable series of numbers
    (err, result) => { // a callback function with 2 arguments, the error and the result
        if (err) {
            console.log(err)
            return // or return null or whatever
        }
        console.log(result)
        const first = result // the first result to a var
        readFile(
            './content/second.txt',
            'utf8',
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log(result);
                const second = result // the second result to a var
                writeFile(
                    './content/result-async.txt',
                    `Here is the result : ${first}, ${second}`, // we could also add the append flag
                    (err, result) => {
                        if (err) {
                            console.log(err)
                            return
                        }
                        console.log(result); // undefined, we dont spectate to get anything
                    }
                )
            }
        )
    }
)

// if we dont specify the format utf8, we will get this
/*
    <Buffer 54 68 69 73 20 69 73 20 74 68 65 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>
*/

// if the file is not found, we will get this
/*
    PS C:\Dev\nodejs-notes> node app.js
    [Error: ENOENT: no such file or directory, open 'C:\Dev\nodejs-notes\content\first.txt'] {
    errno: -4058,
    code: 'ENOENT',
    syscall: 'open',
    path: 'C:\\Dev\\nodejs-notes\\content\\first.txt'
    }
*/