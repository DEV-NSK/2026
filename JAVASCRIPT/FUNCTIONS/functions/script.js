/**
 * FUNCTIONS
 * 
 * function functionName() {
 *      //statements
 * }
 * 
 */

// function one() {
//     console.log("Hello")
//     return "world"
// }
// one()
// var two = one()
// console.log(two)
// console.log(one())


// function stu(a,b) {
//     if (a<10) {
//         console.log("a is small")
//     }
//     else if (b>10) {
//         console.log("a is greater")
//     }
//     else {
//         console.log("a is equal")
//     }
// }
// stu(10,20,20)




// first class function

// var a = function one() {
//     console.log("Hello")
//     return "World"
// }
// a()
// console.log(a())
// console.log(a)



// // Anonymous functions

// var a = function() {
//     console.log("Hello")
//     return "World"
// }
// // a()
// console.log(a())




// ARROW function

/**
 * variable ref_var = () => {
 *      //statements
 * }
 */
// var a = () => {
//     console.log("Hello")
//     return "World"
// }
// // a()
// console.log(a())



// callback functions

/**
 * function functionName1() {
 *       //statements
 *       functionName2()
 * }
 * function functionName2() {
 *      //statments
 * }
 * functionName1()
 */

// function a() {
//     console.log("a function")
//     b();
// }
// function b() {
//     console.log("b function")
// }
// a()


// function a(callback) {     //c==b
//     console.log("1")

//     setTimeout(()=> {
//         console.log("2")
//     },2000)

//     callback() //c==b
// }
// function b() {
//     console.log("3")
// }
// a(b)

/**
 * function functionName(anotherFunctionDefinition){
 *   //statements   
 *   anotherFuntionDefinition()
 * }
 * functionName(anotherFunctionDefinition)
 */