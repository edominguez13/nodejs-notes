
/*
The .promises property in the fs module of Node.js provides promise-based versions of the standard file system methods.
Using the promise-based API allows you to handle asynchronous file operations using promises and async/await syntax,
which can make the code cleaner and more readable compared to using callbacks.

Advantages of Using the Promise-based API:

-Readability: Using async/await syntax makes the code more linear and easier to follow.
-Error Handling: Error handling is more straightforward with try/catch blocks.
-Avoiding Callback Hell: Promises help in avoiding deeply nested callbacks, also known as "callback hell".

By using require('fs').promises, you are importing the promise-based versions of readFile and writeFile,
allowing you to use them with await inside an async function.


*/
const { readFile, writeFile } = require('fs').promises;


console.log('start tasks'); // testing

// async function processFiles() {
const processFiles = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result-async.txt', `Here is the result fff: ${first}, ${second}`);
        console.log('done all tasks'); // testing
    } catch (err) {
        console.log(err);
    }
}

processFiles();

console.log('new task');
