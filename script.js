
let productName = "Hammer";

let productId= "3";

console.log(productName);
console.log(productId);
var person={
    name='bob',
    age='25',
    hasCar=true,
    postCode=NaN
};
console.log(person);

var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);
m.has('Adam'); // 是否存在key 'Adam': true
m.get('Adam'); // 67
m.delete('Adam'); // 删除key 'Adam'
m.get('Adam'); // undefined