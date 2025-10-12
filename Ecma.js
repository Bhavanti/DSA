console.log("hello world!");
let a=Number("1"+"2");//will convert the type to number if the content is convertable//type casting or type conversion and type coercion
console.log(typeof(a));
let b="1"-2;
console.log(b);
//swapping of numbers
//type-1
let x=30;
let y=50;
let z;
z=x;//z=30
x=y;//x=50
y=z;//y=30
//type-2
x=x+y;
y=x-y;
x=x-y;
//type-3
[x,y]=[y,x];//array destructuring
console.log(x,y);
console.log(Math.round((Math.sqrt(Math.abs(-12)*100))));
console.log(Math.random());
