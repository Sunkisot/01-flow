// @flow
function sum(a: number, b: number) {
  return a + b
}
// 会推断出函数返回值为number类型
// let c: string = sum(1, 2)



function fn(a, b): number {
  return a + b
}

// fn('1', '2')