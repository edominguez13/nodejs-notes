// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimun)

// The below vars were exported to the file '4-exportData'
        // const john = 'john'
        // const peter = 'peter'

// const names = require('./4-exportData') // importing the name vars
//console.log(names) // we received an object with two keys, the names


const {john , peter} = require('./4-exportData') // object destructuring, shorter than using names.john or names.peter



// The below function was placed in the file '5-exportFunc'
        // const sayHi = (name) => {
        //     console.log(`Hello there ${name}`)
        // }


const sayHi = require('./5-exportFunc') // importing the name vars


sayHi('susan')
sayHi(john)
sayHi(peter)

