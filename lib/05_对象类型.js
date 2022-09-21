let a = {
  a: 1,

  sayHi() {
    console.log('hello');
  }

};

function greet(obj) {
  obj.sayHi();
}

greet(a);