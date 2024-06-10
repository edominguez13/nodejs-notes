// Built-in modules
// We can check all the built-in modules in node.org, specify the version to get accurate info.

// os   : Operating system, provides, useful properties and methods to interact with the operating system and server

const { log } = require('console');
const os = require('os')
    /* os is a built-in module, we don't have to install it.
    We don't have to write a path, just 'os' and not './os*/

/******************************************************* */

// info about current user
const user = os.userInfo()
//console.log(user);


// system uptime in seconds
console.log(`The system uptiem in ${os.uptime()} seconds`);


// Object example using verios os methods
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);

// the os object is very powerful

