// @flow

// 基础数据类型
let a/*: number*/ = 123;
let b: number = 123
let b1: number = NaN
let b2: number = Infinity
let c: string = '123'
let d: boolean = true
let e: void = undefined
let f: null = null
// a = '123'

let g: Array<string> = [1, {}, 's', true]  // any 任何类型

let g1: Array<number|string> = [123, '123']

console.log(a)


// 简化代码错误逻辑
/**
 * 
 * @param {*} arr 传递一个数组进来，数组中包含数字
 * 函数计算出数组中所有数字的和，进行返回
 */
// function sum(arr) {
//     // 检查函数调用时是否有参数传入
//     if (!arr) {
//         throw new Error("此函数需要传递一个数组作为参数");
//     }

//     // 检查函数调用时传出的参数是否为数组
//     if (!Array.isArray(arr)) {
//         throw new Error("此函数需要传递一个数组作为参数");
//     }

//     // 检查用户传递进来的参数数组，是否为数字数组
//     if (!arr.every(v => typeof v == "number")) {
//         throw new Error("此函数需要传递一个数组作为参数, 数组中的元素需要全部为数字"); 
//     }

//     let result = 0;
//     arr.forEach(v => {
//         result += v;
//     })
//     return result;
// }
function sum(arr: Array<number>) {
  let result = 0
  arr.forEach(e => {
    result += e
  })
  return result
}
sum([1, 2, 3])

// 
