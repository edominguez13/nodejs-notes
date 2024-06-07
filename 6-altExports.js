// This file purpose is to other ways to export data types and functions.

module.exports.items = ['item1', 'item2'] // creates an attribute for the exports object that contains a list of items

const person = {
    name : 'bob',
}

module.exports.singlePerson = person // creates an attribute called 'singlePerson' that contains an object named 'person' with a key named 'name'