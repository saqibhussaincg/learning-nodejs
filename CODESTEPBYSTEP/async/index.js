let a = 10;
let b = 0;

// setTimeout( () => {
//     b = 20;
// }, 2000)

let waitingdata = new Promise( (resolve, reject) => {

    setTimeout( () => {
        resolve(30)
    }, 2000)

})

waitingdata.then( (data) => {
    b = data
    console.log(a + b);
})

// console.log(a + b);

// 10 ayega kyun k settimeout 2 second k baad chala