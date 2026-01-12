const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
//output- {a: 'three', b:'two'}

const a = {};
const b = { key: "b" };
const c = { key: "c" };
a[b] = 123;
a[c] = 456;
console.log(a[b]);
//output- 456

const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };
console.log(admin);
//output- {admin:true, name:'Lydia', age:21}

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};
console.log(shape.diameter());
console.log(shape.perimeter());
//output- NaN


function test() {
    console.log(a);
    console.log(b);
    var a = 10;
    let b = 20;
}
test();
//output- undefined


var x = 10;
if (true) {
  var x = 20;
  console.log(x);
}
console.log(x);

let y = 10;
if (true) {
  let y = 20;
  console.log(y);
}
console.log(y);
//output- 20
        //10