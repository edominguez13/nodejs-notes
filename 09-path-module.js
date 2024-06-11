const path = require('path')

console.log(path.sep); // returns the platform specific separator

const filePath = path.join('/content/', 'subfolder', '/test.txt') // returns the correct way with the proper number of slashes
console.log(filePath);

const base = path.basename(filePath) // returns the base name of the path, commonly the name of the file
console.log(base);

const absolute = path.resolve(__dirname, 'content/', 'subfolder', 'test.txt') // returns the absolute path of the file
console.log(absolute);
// using the global variable __dirname plus the specified elements we can get the absolute path
// this is useful to locate the resources when running in different platforms