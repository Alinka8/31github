const words = ["hello", "o", false, 21, null];

const result = words.filter((word) => typeof word === "string");

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]