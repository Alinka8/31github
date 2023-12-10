let p = new Promise((reslove, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    reslove("Success");
  } else {
    reject("Failed");
  }
});


p.then((message)=>{
    console.log('This is in the then ' + message)
}).catch((message)=>{
    console.log('This is in the catch' + message)
})