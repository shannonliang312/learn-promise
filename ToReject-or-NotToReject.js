var promise = new Promise(function (fulfill, reject) {
  var err = new Error("I DID NOT FIRE");
  fulfill("I FIRED");
  reject(err);
});

function onRejected(err) {
  console.log(err.message);
}

promise.then(console.log, onRejected);
