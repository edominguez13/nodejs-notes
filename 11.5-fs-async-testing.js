// async method

const  { readFile, writeFile } = require('fs')

console.log('start tasks'); // testing

readFile(
    './content/first.txt',
    'utf8',
    (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        //console.log(result)
        const first = result
        readFile(
            './content/second.txt',
            'utf8',
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                //console.log(result);
                const second = result
                writeFile(
                    './content/result-async.txt',
                    `Here is the result : ${first}, ${second}`,
                    (err, result) => {
                        if (err) {
                            console.log(err)
                            return
                        }
                        //console.log(result);
                        console.log('done all tasks'); // testing
                    }
                )
            }
        )
    }
)


console.log('new task'); // testing

// When running this code we get:
/*
    PS C:\Dev\nodejs-notes> node 11.5-fs-async-testing
    start tasks
    new task
    done all tasks
*/
// This means that node can serve other requests while asynchronous tasks are performed
// a non-stopping code