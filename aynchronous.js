const event = new Promise((resolve, reject) => {
  var name = "Pedro";
  if (name == "Pedro") {
    resolve(name);
  } else {
    reject("Name was not Pedro, name was: " + name);
  }
});

event.
then((name) => {
  console.log(name);
});
.catch((err)=>{
    console.log(err);
});
