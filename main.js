// 1- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


// const calc1=(a,b) =>{
//     let result = a * b;
//     return result;
// }
//
// let s = calc1(2.9, 4.5)
// console.log(s)
//
//


// 2 - створити функцію яка обчислює та повертає площу кола з радіусом r

// const calc=(a,b,c)=>{
//     let result = a * b *c;
//     return result;
// }
//
// let s = calc(2, 2, 3.14)
// console.log(s)

// 3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// const sCylinder=(r, h)=> {
//     return (2 * Math.PI * r * r) + (2 * Math.PI * r * h)
// }
//
// console.log(sCylinder(4, 7))


// 4 - створити функцію яка приймає масив та виводить кожен його елемент!!!!


// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// const looper=(Array)=> {
//     for (let users of Array) {
//         console.log(users)
//     }
// }
// looper(users)

// 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент; !!!!

// const writer=(history) =>{
//     document.write(`
//   <p> ${history} </p>
// `);
// }
//
// writer('History in Octen school')


// 6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// const ulCreat=(text) =>{
//     document.write(`<ul>`);
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// ulCreat('Octen');

// 7 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список !!!!

// const ulCreator=(arr) =>{
//     document.write(`<ul>`);
//     for (const item of arr) {
//
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// ulCreator(['qwe','olia', 1025, true,false]);

// 8 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок. !!!!


// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
// ];
//
// const userPerson=(arr)=> {
//     for (const user of arr) {
//         document.write(`<div>
// <p> name: ${user.name}</p>
// <p> age: ${user.age}</p>
// <p> status: ${user.status}</p>
//
// </div>`)
//     }
// }
//
// userPerson(users)

// 9 - створити функцію яка повертає найменьше число з масиву
//
// const minNumber=(arrOfNumber)=> {
//     let min = arrOfNumber[0]
//     for (let i = 1; i < arrOfNumber.length; i++) {
//         if (arrOfNumber < min) {
//             min = arrOfNumber[i];
//         }
//     }
//     return min;
// }
//
// console.log('minNumber: ', minNumber([2, 10, 47, 15, 0.3, -2]))

// 10 - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13 !!!!
//
// const sum = (arrOfNumber) => {
//     let result = 0
//     for (let i = 1; i < arrOfNumber.length; i++) {
//         result = result + arrOfNumber[i]
//     }
//     return result
// }
//
// console.log('sumNumber: ', sum([1, 2, 10]))



// 11 - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swap=(arr, index1, index2)=> {
    const numIndex1 = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = numIndex1

    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1))


// 12 - Написати функцію обміну валюти exchange(sumUAH,,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const exchange=(sum, currencyValues, exchangeCurrency) =>{
    for (const cur of currencyValues) {
        if (cur.currency === exchangeCurrency) {
            return sum / cur.value
        }
    }

}

const result = exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD')
console.log('result: ', result)