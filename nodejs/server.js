const log = require("./logger")(module);
const db = require('database');
db.connect();

const User = require('./user');

function run() {
  const userV = new User('Petr');
  const userM = new User('Max');
  
  userV.hello(userM);
  log(db.getPhrase("Run successful"))
}

// console.log(module)

if(module.parent) {
  exports.run = run;
} else {
  run();
}