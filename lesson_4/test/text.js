var obj = {
  a: 1
};
console.log('start');
function changeObj(obj) {
  console.log('on func start');
  console.log(obj);
  obj.a = 2
  console.log(obj.a);
  console.log('on func end');
}

changeObj(obj)

console.log(obj.a)
console.log('end');

