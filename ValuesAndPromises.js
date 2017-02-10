var promise = new Promise(function(fulfill, reject){
  fulfill("MANHATTAN");
});

function attachTitle(val) {
  return "DR. " + val;
}

promise.then(attachTitle).then(console.log);
