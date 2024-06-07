const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

module.exports = sayHi // if I place the function inside curly brackets I will export an object
// similar to export default