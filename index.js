// console.log("Hello World");

const createHelloWorld = function () {
  return (function (...args) {
    return "Hello World";
  })();
};

const a = createHelloWorld();
