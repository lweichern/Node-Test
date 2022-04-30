// Modules - Encapsulated Code (We only share codes that we wanna share)
// Every file in node is a module

// Import using require
const names = require("./2-modules-names");
const sayHi = require("./2-modules-utils");
// The function in 2-modules-functions.js will execute too
require("./2-modules-functions");

sayHi("John");
sayHi(names.peter);
sayHi(names.susan);
