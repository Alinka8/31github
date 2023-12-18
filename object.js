const testObj = { age: 20, name: "geek", grades: "b", zipCode: 60013 };

getLengthProp = (obj) => {
  return Object.keys(obj);
};

console.log(getLengthProp(testObj));