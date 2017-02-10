var promise = new Promise(function (fulfill, reject) {
  // Your solution here
  var error = new Error("REJECTED!");

  setTimeout(function(){
    reject(error);
  }, 300);

});

function onReject(error) {
  // Your solution here
  console.log(error.message);
}

function onFulfill(val) {
}

// Your solution here

promise.then(onFulfill, onReject);