function sum(){
    let number = 0;
    const myFunc = function check(){
        number = number + 1;
        return number
    }
    return myFunc;
}
let interation = sum();
let  a1 = interation();
let  a2 = interation();
let  a3 = interation();
console.log(a1,a2,a3);


for(let i = 0 ; i < 5 ; i++){
    let sum = 4;
}
console.log(sum);