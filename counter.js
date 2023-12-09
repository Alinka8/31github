var createCounter = function (n) {
  var n = counter;
  return function () {
    const currentCouner = counter;
    counter = counter + 1;
    return currentCouner;
  };
};
