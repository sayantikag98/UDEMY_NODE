// const func = (cb, name) => {
//     setTimeout(()=>{
//         cb(name);
//     }, 2000);
// };

// const print = (name) => {
//     console.log(`hello ${name}`);
// };

// const name = "Sayantika";

// func(print, name);



// CALLBACK CHALLENGE

const sum = (a, b, cb) => {
    setTimeout(() => {
        const sum = a + b;
        cb(sum);
    }, 2000);
}

sum(1,2,(sum) => {
    console.log(sum);
});