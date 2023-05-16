const db = require("database");
const log = require("../logger")(module);

function User(name) {
  this.name = name;
}

User.prototype.hello = function(who) {
  log( db.getPhrase("hello") + " " + who.name)
}

console.log("user.js is required!");
setTimeout(() => console.log("user.js after timeout"), 1000);
module.exports = User;