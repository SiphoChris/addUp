let myArray = document.querySelector('#myArray')
let display = document.querySelector('#display')
const btn = document.querySelector('button')

let previous;
let current;


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

myArray.innerText = `[${numbers}]`


function addUp(previous, current){
    return previous + current
}


btn.addEventListener('click', () => {
    display.innerText = `Sum: ${numbers.reduce(addUp)}`;
})

// console.log(numbers.reduce( (c, n)=> c + n  ));  