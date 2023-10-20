const myPersevereCodeObj = {
  wait: 'I do not object'
};

// Part 1 - Adding and changing properties in plain JS.
// Here, we'll be changing and adding properties BELOW the creation of the object.
// You won't change lines 1-3 above, but instead set and change the properties for each step below by writing NEW code underneath each comment.

// Below, set the value of property `wait` to be "I object".
myPersevereCodeObj.wait = "I object"


// Add the new property `isAnExcellentObject` and set it to `true`.
myPersevereCodeObj.isAnExcellentObject = true


// Add the property `term` and set it to 1.
myPersevereCodeObj.term = 1

// Now add 1 to the value of your object's `term` property and put that new value back in your object's `term`.
myPersevereCodeObj.term++

// Now add a new property called `currentScore` and set it to 3.
myPersevereCodeObj.currentScore = 3

// Now add a new property called `cumulativeScore` and set it to 50.
myPersevereCodeObj.cumulativeScore = 50

// Now add your `currentScore` and your `cumulativeScore` and put it back in `cumulativeScore`.
myPersevereCodeObj.cumulativeScore += myPersevereCodeObj.currentScore

// Now add a property called `I am exactly this cool` (you'll need bracket notation!) and set it to `soooooo cool`.
myPersevereCodeObj[`I am exactly this cool`] = `soooooo cool`


// Part 2 - your own object.
// Now make a new EMPTY object that represents yourself. You won't put any properties in the curly braces, but just like in part 1, add them in each step below using plain JavaScript statements.
const person = {}

// Add a `firstName` property and set it to a string.
person.firstName = 'Stephen'

// Add a `lastName` property and set it to a string.
person.lastName = 'Delius'

// Add a `fullName` property and set it to the name properties put together with a space string in the middle.
person.fullName = `${person.firstName} ${person.lastName}`


// Add an `age` property and set it to a number.
person.age = 36

// Add an address property and set it to an empty array.
person.address = []

// Now push three strings into that array.
person.address.push('1757', 'Merritt', 'Street')



// Part 3 - setting key-value pairs in-line.
// Now make a new object, but this time we'll pre-populate it, not set it in any lines below it. In other words, the properties should be set the same way I initially set the `myPersevereCodeObj` on line 1. It can be called whatever you want and can have whatever properties you want, as long as they include at least one string value, boolean value, number value, and array of something. The important thing here is: this should all be done within the curly brackets of the object, not below the place where the object is declared.
const computer = {
  cpu: 'AMD Ryzen 5 3600',
  motherboard: 'MSI x470 Gaming Plus',
  memType: 'SK Hynix DDR4 2400MHz',
  memIsECC: true,
  'memCapacity(GB)': 8,
  memModuleCount: 4,
  'memTotal(GB)': 32,
  gpu: 'Nvidia 1070ti',
  storage: [
    systemDrive = [ { 'SK Hynix Gold p31 M.2 NVMe': '1TB' } ],
    backupZRAID1 = [ { cache: { 'Intel Optane' : '14GB' } },
    data = [ { 'SATA 5400RPM HDD': '3TB' }, { 'SATA 5400RPM HDD': '3TB' }, { 'SATA 5400RPM HDD': '3TB' }, { 'SATA 5400RPM HDD': '3TB' } ] ] ]
}

console.log(computer)
console.log(computer.storage[0])
console.log(computer.storage[1])

// As a stretch goal, go back pre-populate the object with at least one property using a key name that CAN'T be a variable name. That would be anything with a space in it, or a dash, or starting with a number.
