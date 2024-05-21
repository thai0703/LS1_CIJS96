// import {sum} from './math.js'
// import {sum as mathSum} from './math.js'
// import mathSum from './math.js'
// arrow function

// const sayHi = (x) => {
//     let a = 2
//     let b = 9
//     return a*x + b
// }

// khi suy ra (=>) là một giá trị hoặc các logic trả về giá trị, thì tương đương phép return thông thường
// const sayHi = (x) => 2*x +3;

// Nếu là object thì phải bọc object trong ()
// const sayHi = (x) => ({name: "mindx"})

// template literal
// const user = 'MindX';
// const text = `Hello ${user}`
// console.log(text)

// const Result = mathSum(1, 2)
// console.log(Result)

// const listNum = [1, 2, 3]
// console.log(...listNum)

// bài 1

// const square = (x) => {
//     return x*x;
// }


const square = x => x*x

// const square = (x) => x*x
console.log(square(4))

// Bài 2

const checkInclude = (text, word) =>{
    text = text.toLowerCase();
    word = word.toLowerCase();
    let find = text.includes(word)
    // if (find == -1) {
    //     return false
    // }
    // else {
    //     return true
    // }
    return find
}
console.log(checkInclude('hello world', 'HelLo'))

// Bài 3



let arr = ['one', 'two', 'three'];

const addNum = (arr, pre) => {
    let result = []
    for (let i = 0; i<arr.length; i++){
        result.push(`${pre}: ` + arr[i])
    }
    return (result)
}
console.log(addNum(arr, 'number'))

// Bài 4

let arr1 = [1, 2, 3, 4]

const dbl = (arr) => {
    let result = []
    for (let i = 0; i<arr.length; i++){
        result.push(arr[i]*2)
    }
    return (result)
}
console.log(dbl(arr1))

// Bài 5

let arr2 = [1, 2, 3, 4, 5, 6, 7]
const odd = (arr) => {
    let result = []
    for (let i = 0; i<arr.length; i++){
        if (arr[i] % 2 == 1){
        result.push(arr[i])
        }
    }
    return (result)
}
console.log(odd(arr2))

// Bài 6

const employees = [
    { id: 1, name: "John", workingDays: 22 },
    { id: 2, name: "Jane", workingDays: 20 },
    { id: 3, name: "Mark", workingDays: 25 },
];

// const [x, y, z] = employees;

const days = (arr) => {
    let result = 0;
    for (let i = 0; i<arr.length; i++){
        result += arr[i].workingDays
    }
    return (result)
}
console.log(days(employees))
// console.log(days([x, y, z]))

// Bài 7

const employees7 = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
];

const highSalary = (arr) => {
    let max = 0;
    let info = {};
    for (let i = 0; i<arr.length; i++){
        max = arr[i].salary;
        info = arr[i]
        if (arr[i].salary > max){
            max = arr[i].salary;
            info = arr[i]
        }
    }
    return (info)
}
console.log(highSalary(employees7))