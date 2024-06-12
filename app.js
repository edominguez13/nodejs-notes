// npm = node package manager

// npm - global command, comes with node
// npm --version OR --v

// local dependency - use it only in htis particular project (used more)
// npm i <packageName>

// global dependency - use it in any project
// npm install - g <packageName>
// sudo npm install - g <packageName> (mac)


// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default) (faster)


// When downloading a repository
// npm install (this will download all dependencies present in the package.json)

// commands ran
/*
    npm init -y
    npm i lodash
    npm i bootstrap
    npm i nodemon -D (or --save-dev, this is a dev dependency) -> nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
*/
// dev dependencies are not used in production code



// In package.json 
// We modified the scripts part
/*
"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
*/
// commands
// npm start : will run node app.js
// npm run dev : will run nodemon app.js, dev mode

// we can also set it like this:
/*
"scripts": {
    "start": "nodemon app.js"
  },
*/
// in the mean time, just to run npm start


const _ = require('lodash') // lodash is very useful for data manipulation

const items = [1 , [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems) // [ 1, 2, 3, 4 ]
console.log('hello people')


// to uninstall a package
// npm uninstall <packageName>
// or
/*
1- delete the node_modules folder
2- delete the package-lock.json file
3- remove the package from the package.json file
4- run the command npm install

*/