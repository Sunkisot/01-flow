// @flow
let a: { sayHi: () => void} = {
  a: 1,
    sayHi() {
    console.log('hello')
  }
}


function greet(obj: { sayHi: () => void }) {
  obj.sayHi()
}

greet(a)