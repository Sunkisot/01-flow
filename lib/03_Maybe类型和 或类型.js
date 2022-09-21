// maybe类型 ?
let a = undefined;

function sum(a) {
  a = a || 0;
  console.log(a);
}

sum(10);
sum(); // 或类型 ｜

let b = '123';
b = 123;