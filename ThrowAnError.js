var jsonFile = process.argv[2];

function parsePromised() {
  return new Promise(function(fulfill, reject){
    try {
      fulfill(JSON.parse(jsonFile));
    }
    catch(e) {
      reject(e);
    }    
  });
}

parsePromised().then(null, console.log);