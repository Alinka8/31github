//anonymous function

<button
  onClick={() => {
    console.log("hello world");
  }}
></button>;

//turnary operators
let age = 10;
let name = age > 10 ? "Pedro" : "Jack";

const Component = () => {
  return age > 10 ? <div>Pedro</div> : <div>Jack</div>;
};

//object
const person = {
  firstName: "Alina",
  year: 2023,
  isMaried: false,
};

const { firstName, year, isMarried } = person;

//if we want to change the property of the person

const personSecond = {
  name: "Pedro",
  age: 21,
  isMarried: false,
};

const personThird = { ...person, name: "Jack" };

//array .map .filter
//map when you want to add something to your list
let animals = ["tiger", "zebra", "pantera"];

animals.map((name) => {
  return <h1>{name}</h1>;
});

//filter 
let animal = ["tiger", "zebra", "pantera", "zebra"];

animal.filter(name)=>{
    return name != "zebra"
}