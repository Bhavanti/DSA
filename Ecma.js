// console.log("hello world!");
// let a=Number("1"+"2");//will convert the type to number if the content is convertable//type casting or type conversion and type coercion
// console.log(typeof(a));
// let b="1"-2;
// console.log(b);
// //swapping of numbers
// //type-1
// let x=30;
// let y=50;
// let z;
// z=x;//z=30
// x=y;//x=50
// y=z;//y=30
// //type-2
// x=x+y;
// y=x-y;
// x=x-y;
// //type-3
// [x,y]=[y,x];//array destructuring
// console.log(x,y);
// console.log(Math.round((Math.sqrt(Math.abs(-12)*100))));
// console.log(Math.random());
 
// let a = Number(prompt("enter any number"));
// if(isNaN(a)){
//     console.log("Enter a number!");
// }
// else {
//     let sum=0;
//     let k =a;
// while(a>0){
//     let b=a%10; 
//    let fact = 1;
//    for(let i=1; i<=b; i++){
//     fact=fact*i;
//    }
//   sum = sum+fact;
//   a = Math.floor(a/10)
// }
// if(sum===k){
//     console.log("Strong number");
// }
// else{
//     console.log("not strong number");
// }


// }
// let random = Math.trunc(Math.random()*100);
// let guess=0;
// for( let i=1 ; i<=5; i++){
// while(guess!==random && i!=5 ){
//     guess = Number(prompt("Guess the number between 0-100"));
//  if(guess<0 || guess>100 || isNaN(guess)){
//     console.log("Enter a valid number");
//     continue;
//  }
// if(guess<random){
//     console.log("too low!");
// }else if(guess>random){
//     console.log("too high!");
// }else if(guess===random){
//     console.log("correct answer!");
// }
// }
// break;
// }
// let prom = 0;

// do{
//     let ask=prompt("do you want to use calculator?");
//     if(ask.toLowerCase()==="no"){
//         break;
//     }else{
//      prom = Number(prompt("Press 1 for addition, Press 2 for subtraction, Press 3 for multiplication, Press 4 for division"));
//    if(isNaN(prom) || prom<0 || prom>4){
//     alert("enter valid input");
//     continue;
//    }
//     let a = Number(prompt("enter the first number:"));
//     let b = Number(prompt("enter the second number"));
//     if(prom===1){
//         console.log(`The addition result of the numbers is = ${a+b}`);
//     }
//     else if(prom===2){
//         console.log(`The subtraction result of the numbers is = ${a-b}`);
//     }
//      else if(prom===3){
//         console.log(`The multiplication result of the numbers is = ${a*b}`);
//     }
//      else if(prom===4){
//         console.log(`The division result of the numbers is = ${a/b}`);
//     }else{
//         console.log("Enter a valid number");
//    }
//     let wish=prompt("Do you want to continue?(yes/no)");
//        var strwish = wish.toLowerCase()
// }
// }while( strwish !=="no"){
//     console.log("ended");
// }
let prompt = require(`prompt-sync`)();
let n = prompt("enter a number");
for(let i=0; i<n;i++){
    for(let j=n-1;j>i; j--){
        process.stdout.write(" ");
    }
    for(let j=0;j<=i;j++){
        process.stdout.write("*");
    }
             process.stdout.write("\n");

}
for(let i=0; i<n; i++){
    for(let j=0; j<=i; j++){
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}
   
process.stdout.write("\n");

for(let i=0;i<n;i++){
    for(let j=n-1; j>=i;j--){
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}
for(let i=0; i<=n; i++){
    for(let j=n-1; j>=i; j--){
        process.stdout.write(" ");
    }
        for( j=0; j<i; j++){
            process.stdout.write("* ")
        }
    
    process.stdout.write("\n");
}
    process.stdout.write("\n");


for(let i=0;i<n;i++){
    for(let j=0; j<n; j++ ){
        if( i+j==n-1 || i==j){
        process.stdout.write("* ");
        }else{
            process.stdout.write(" ")
        }
    }
    process.stdout.write("\n");
}
process.stdout.write("\n");
for(let i=0;i<n;i++){
    for(let j=0; j<n; j++ ){
        if(i==j){
        process.stdout.write("* ");
        }else{
        process.stdout.write(" ");
        }
    }
     for(let j=0; j<n-1; j++ ){
        if(i+j==n-2){
        process.stdout.write("* ");
        }else{
            process.stdout.write(" ");
        }
           
    }
    process.stdout.write("\n");
}
