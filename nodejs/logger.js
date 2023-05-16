module.exports = function(module) {

  return function(/* */) {
    const args = [module.filename].concat(Array.from(arguments)); 
    console.log.apply(console, args)
  }
}