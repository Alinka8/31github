const animals = ["sheep", "goat", "zebra"];

const withoutSheep = animals.filter((a) => a != "sheep");

const withoutGoats = animals.filter(a => {
    return a  !== "goat ";
})
console.log(withoutSheep)

console.log(withoutGoats)