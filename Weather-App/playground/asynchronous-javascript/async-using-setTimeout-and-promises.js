console.log("Message 1");

setTimeout(()=>{
    console.log("Message 2");
},0);

new Promise((resolve, reject) => {
    resolve();
})
.then((resolve,reject)=>{
    console.log("Message 3");
})
.then((resolve,reject)=>{
    console.log("Message 4");
})
.catch(err => {
    console.log(err);
})

console.log("Message 5");