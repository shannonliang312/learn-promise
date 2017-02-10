// var Promise = require('es6-promise').Promise;

var promise = new Promise(function (fulfill, reject) {
  // Your solution here
  setTimeout(function(){
    fulfill("FULFILLED!");
  }, 300)
});

// Your solution here
promise.then(function(val){
  console.log(val);
});