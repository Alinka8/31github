const number = -56;

const takesNumber = (num) => {
  let result = num.toString().split("").reverse().joint("");
  return result;
};

takesNumber(number);