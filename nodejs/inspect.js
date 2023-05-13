const util = require("util");

const obj = {
  a: 5,
  b: 100,
  fn() {
    return "this is method of obj"
  },
  inspect() {
    return "this is method INSPECT of obj"
  }
}
obj.self = obj;

console.log(util.inspect(obj))

const str = util.format("My %s %d %j","string", 123,{test: "obj"});
console.log(str)