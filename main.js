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
