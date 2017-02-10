function all(p1, p2) {
  var count = 0;
  return new Promise(function (fulfill, reject) {
    var res = [];

    p1.then(function (val) {
      count++;
      res[0] = val;

      if (count == 2) {
        fulfill(res);
      }
    });

    p2.then(function (val) {
      count++;
      res[1] = val;

      if (count == 2) {
        fulfill(res);
      }
    });
  });
}

all(getPromise1(), getPromise2()).then(console.log);