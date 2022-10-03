/* Я комментарий, который ждал тебя здесь. Удали меня и напиши хороший код! */
//zadanie 1
"use strict";
 const details = {
    message: 'Hello!',
 }
 function getMessage() {
    return this.message;
 }
 console.log(getMessage.call(details));

 //zadanie 3
 (
    function(a) {
        arguments[0] = 10;
        return a;
    }
 )(5);
 //zadanie 4

 let f = function g() {
    return 23;
 };
 console.log(typeof g());
 // zadanie 5
 const foo = bar();
 const number = 2;
 function bar() {
    return number;
 }
 //zadanie 5
 let name = 'John';
 function printName() {
    console.log(name)
 }
 setTimeout(() => {
    let name = "Peter";
    printName();
 },1000);

 //zadanie 6
 let name = 'John';
 function printName() {
    let name = "Peter";
    console.log(name)
 }
 printName();
 // zadanie 7
 function getThis() {
    return this;
 }
 console.log(getThis());

 //zadanie 8
 const details = {
    name: 'John',
 }
 function getMessage(message) {
    return `${message} ${this.name}`;
 }
 console.log(getMessage.apply(details, ['Hello']));
 // zadanie 9
 printMessage();
 function printMessage() {
    console.log('Hello!');
 }
 //zadanie 10
 function foo() {
    return { bar: 1};
 }
 console.log(typeof foo().bar);
 //zadanie 11
 var name = 'John';
 function printName() {
    console.log(name);
    var name = 'peter';
    console.log(name);
 }
 printName();
 //zadanie 12
 var name = 'John';
 var user = {
    name: "Peter",
    printMessage(){
        console.log(`Hello, ${this.name}!`);
    }
 };
 var printMessage = user.printMessage;
 printMessage();
 //zadanie 13
 for (let i = 0; i < 10; i++) {
        
 }
 console.log(i);
 // zadanie 14
 function foo(a, b) {
    return a*b;
 }
 const bar = foo.bind(null, 2);
 bar(2);
 //zadanie 15
 for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i)
    }, 1000)
    
 }
 //zadanie 16
 "use strict";
 
 function getThis() {
    return this;
 }
 console.log(getThis());

 //zadanie 17
 let f =function(a, b) {return a+b} //est
 let f = new Function("a, b", "return a+b") //net
 let f = new Function("a", "b", "return a+b") //net
 let f =(a, b) => a+b //est
 let f =(a, b) => { a+b} //net