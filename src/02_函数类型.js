// @flow
function test() {
  return 1
}

let func: (a: Number, b: number) => number = test


function ajax(callback: (data: Array<number>) => void) {
  console.log('ajax') 
  callback([123]) 
}

ajax((e: Array<number>) => {
  console.log(e)
})