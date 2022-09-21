// @flow
// maybe类型 ?
let a: ?number = undefined

function sum(a: ?number) {
  a = a || 0
  console.log(a)
}
sum(10)
sum()

// 或类型 ｜
let b: number | string = '123'
b = 123
