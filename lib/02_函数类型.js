function test() {
  return 1;
}

let func = test;

function ajax(callback) {
  console.log('ajax');
  callback([123]);
}

ajax(e => {
  console.log(e);
});