// const button = document.querySelector(button)

// let resultDiv = document.createElement('div')
// resultDiv.id = 'result'
// document.getElementById('wrapper').appendChild(resultDiv)
// document.getElementById('result').innerHTML = text

// button.addEventListener('click',displayStats)
// function displayStats(){
//     const input =   document.getElementById('input')
//     const city = input.options[input.selectedIndex].value

//     let population = 0; let literecyRate 
// }

// let total = 1;
// priceINR.forEach(y => {
//     let a = 1;
//     for(let value of val)
//         a *= value;
//     total *= a;
// });

// let price = [20,35,13]

// let priceINR = price.map( x => x*83)

// console.log(priceINR)

// let total = priceINR.reduce( (a,c) => a + c)

// console.log(total)

Input = [6,-5,7,-2,4,6,-1]

let pos = Input.filter( val => val > 0).reduce((acc,cu) => acc+cu,0)
console.log(pos)

// arr = [4,6,23,1,1,3,5,7,8,4,3] //remove duplicate from the array

// let duplicate = arr.filter((acc, cu) => {
//     if(acc[cu])
//         return acc
//     else
//         acc = cu 
//     return acc                   
// },0)

let arr = [4, 6, 23, 1, 1, 3, 5, 7, 8, 4, 3];

// let uniqueArr = arr.filter((value, index) => arr[.indexOf(value)] === index);

// console.log(uniqueArr);

let arr1 = new Set(arr)
console.log([...arr1]);


// this is the example of closure


function add(x){
    return function(y){
        return x + y
    }
}

let total = add(5)
console.log(total(10))



