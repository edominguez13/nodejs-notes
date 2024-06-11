// shortened by myself

// async method
const { log } = require('console')
const  { readFile, writeFile } = require('fs')

const errHandler = (err) => { // this is NOT a solution because the program keeps running after the first error
    if (err) {
        console.log(err)
        return // or return null or whatever
    }
}

readFile(
    './content/first.txt', // the path of the file
    'utf8', // if we don't specify the format, we will get a buffer, that is an un readable series of numbers
    (err, result) => { // a callback function with 2 arguments, the error and the result
        errHandler(err)
        console.log(result)
        const first = result // the first result to a var
        readFile(
            './content/second.txt',
            'utf8',
            (err, result) => {
                errHandler(err)
                console.log(result);
                const second = result // the second result to a var
                writeFile(
                    './content/result-async2.txt',
                    `Here is the result : ${first}, ${second}`, // we could also add the append flag
                    (err, result) => {
                        errHandler(err)
                        console.log(result); // undefined, we dont spectate to get anything
                    }
                )
            }
        )
    }
)
