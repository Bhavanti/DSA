// console.log("hello world!");
// let c=Number("1"+"2");//will convert the type to number if the content is convertable//type casting or type conversion and type coercion
// console.log(typeof(c));
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
// let prompt = require(`prompt-sync`)();
// let n = prompt("enter a number");
// for(let i=0; i<n;i++){
//     for(let j=n-1;j>i; j--){
//         process.stdout.write(" ");
//     }
//     for(let j=0;j<=i;j++){
//         process.stdout.write("*");
//     }
//              process.stdout.write("\n");

// }
// for(let i=0; i<n; i++){
//     for(let j=0; j<=i; j++){
//         process.stdout.write("*");
//     }
//     process.stdout.write("\n");
// }
   
// process.stdout.write("\n");

// for(let i=0;i<n;i++){
//     for(let j=n-1; j>=i;j--){
//         process.stdout.write("*");
//     }
//     process.stdout.write("\n");
// }
// for(let i=0; i<=n; i++){
//     for(let j=n-1; j>=i; j--){
//         process.stdout.write(" ");
//     }
//         for( j=0; j<i; j++){
//             process.stdout.write("* ")
//         }
    
//     process.stdout.write("\n");
// }
//     process.stdout.write("\n");


// for(let i=0;i<n;i++){
//     for(let j=0; j<n; j++ ){
//         if( i+j==n-1 || i==j){
//         process.stdout.write("* ");
//         }else{
//             process.stdout.write(" ")
//         }
//     }
//     process.stdout.write("\n");
// }
// process.stdout.write("\n");
// for(let i=0;i<n;i++){
//     for(let j=0; j<n; j++ ){
//         if(i==j){
//         process.stdout.write("* ");
//         }else{
//         process.stdout.write(" ");
//         }
//     }
//      for(let j=0; j<n-1; j++ ){
//         if(i+j==n-2){
//         process.stdout.write("* ");
//         }else{
//             process.stdout.write(" ");
//         }
           
//     }
//     process.stdout.write("\n");
// }

// let arr=[];
// let sum=0;
// let size = Number(prompt("Enter the size of the array:"));
// for(let i =0; i<size; i++){
//     let ele = Number(prompt("Enter the elements of the array"));
//     arr.push(ele);
//     sum+=arr[i];
// }
// console.log(arr);
// console.log(sum);


// let arr = [10, 20, 5, 6, 30];
// let g= clc[0];
// for(let i=0; i<clc.length; i++){
//     if(g<clc[i]){
//         g=clc[i];
//     }
// }
// console.log(g);

// let k=Math.max(arr[0],arr[1]);
// let l=Math.min(arr[0],arr[1]);
// for(let i=2; i<arr.length; i++){
//     if(k<arr[i]){
//         l=k;
//         k=arr[i];
//     }else if(arr[i]!=k && arr[i]>l){
//         l=arr[i];
//     }
// }
// console.log(k,l);

// let n = Number(prompt("Enter the size of the first array:"));
// let a = [];
// while(n>0){
//    let ele = Number(prompt("Enter the elements of the array:"));
//    a.push(ele);
//    if(a.length==n){
//     break;
//    }
   
// }
// console.log(a);

// let left = new Array();
// let right = new Array();
// let l= a[0];
// let r= a[n-1];
// for(let i=0; i<n; i++){
//     if(a[i]>=l){
//         left.push(a[i]);
//     }else{
//         left.push(l);
//     }
//      if(a[i]>=r){
//         right.push(a[i]);
//     }else{
//         right.push(r);
//     }
// }
// console.log(left);
// console.log(right);
// let sum=0;
// for(let i=0; i<n; i++){
//      let min = Math.min(left[i],right[i]);
//      let diff = min-a[i];
//      sum+=diff;
// }
// console.log(sum);
 
// ans=a[0];
// count=1;
// for(let i=1; i<n; i++){
//     if(count==0){
//         ans=a[i];
//         count=1;
//     }else if(a[i]==ans){
//         count++;
//     }else if(a[i]!=ans){
//         count--;
//     }
// }
// let rep=0;
// for(let i=0; i<n; i++){
//     if(a[i]==ans){
//        rep++;
//     }
// }
// if(rep>n/2){
// console.log(`The majority element in the array is: ${ans}`);
// }else{
//     console.log("No majority element present in the array!");
// }
// let min = arr[0];
// let i = 0;
// let max = 0;
// while(i<arr.length){
//     if(arr[i]<min){
//         min=arr[i];
//     }
//     let diff = arr[i]-min;
//     if(diff>max){
//         max=diff;
//     }
//     i++;
// }
// console.log(`The maximum profit is:${max}`);



// let z;
// let i=0;
// let j=0;
// let k=arr1.length-1;
// while (i<=  k){
//     if(arr1[i]==0){
//      z=arr1[j];
//      arr1[j]=arr1[i];
//      arr1[i]=z;
//      j++;
//      i++;
//     }else if(arr1[i]==2){
//         z=arr1[k];
//         arr1[k]=arr1[i];
//         arr1[i]=z;
//         k--;
//     }else{
//         i++;
//     }
// }
// console.log(arr1);
// let n2 = Number(prompt("Enter the size second of the array:"));
// let arr2 = [];
// while(n2>0){
//    let ele = Number(prompt("Enter the elements of the array:"));
//    arr2.push(ele);
//    if(arr2.length==n2){
//     break;
//    }
   
// }
// console.log("Second array:",arr2);
// let i = arr1.length;
// arr1.length+=arr2.length;
// let j=0;
// while(j<arr2.length){
//     arr1[i]=arr2[j];
//     i++;
//     j++;
// }
// console.log("Merged array:",arr1);
// console.log("arr1.length:",arr1.length);
//  let i=j=k=0;
// while(i<arr1.length && j<arr2.length){
// if(arr1[i]<arr2[j]){
//     arr3[k]=arr1[i];
//     k++;
//     i++
// }else{
//     arr3[k]=arr2[j];
//     k++;
//     i++;
// }
// }
// while(i<arr1.length){
//     arr3[k]=arr1[i];
//     i++;
//     k++;
// }
// while(j<arr2.length){
//     arr3[k]=arr2[j];
//     j++;
//     k++;
// }
// console.log("Merged array:0",arr3);

// let j=1;
// for(let i=0; i<n-1;i++){
//     if(arr[i]!=arr[i+1]){
//         arr[j]=arr[i+1];
//         j++;
//     }
//     console.log("i=",i);
//     console.log("j=",j)
// }
// console.log(arr);
// array=[...arr];
// let left= prompt("By how many steps do u want to left shift the elements"); 
// left=left%n;
// for(let k=1;k<=left;k++){
//    console.log("hello");
//    copy=array[0];
// for(let i=1;i<n;i++){
//    array[i-1]=array[i]
// }
// array[n-1]=copy;
// }
// console.log(array);
// array2=[...arr]; ''
// copy2=array2[n-1];
// for(i=n-2;i>=0;i--){
//    array2[i+1]=array2[i];
// }
// array2[0]=copy2;
// console.log(array2);
// let left = [...arr]
// let copy = left[0];
// for(let i=0; i<n; i++){
//     left[i]=left[i+1];
// }
// left[n-1]=copy;
// console.log("Array after left shift:", left);
 
// let right = [...arr];
// let copy2=right[n-1];
// for(let i=n-2; i>=0; i--){
//     right[i+1]=right[i];
// }
// right[0]=copy2;
// console.log("Array after right shift:",right);

// for(let i=n-1; i>=0; i--){
//      console.log(arr[i]);
// }

// let str = "MADAM";
// console.log(str);
// for(let i=str.length-1 ; i>=0; i--){
//     console.log(str[i]);
    
// }
// let b="";
// for(let i=str.length-1; i>=0; i--){
//      b=b+str[i];
// }
// console.log(b);
// if(b==str){
//     console.log("Entered string is a palindrome!");
// }else{
//     console.log("Entered string is not a palindorme!");
// }
// let sum=0;
//  max=-Infinity;
// let a = [0, -5, 2,-1, 6];
// for(let i=0; i<a.length; i++){
//   sum=sum+a[i];
//   if(sum<0){
//     sum=0;
//   }else if (sum>max){
//     max=sum;
//   }
// }
// console.log(max);

// let arr =[10, 20, 30, 40, 50];
// let str = "Bhavanti";
// let rev="";
// console.log(str.length);
// for(let i=0; i<arr.length; i++){
//   console.log(arr[i]);
// }
// for(let i=str.length; i>=0; i--){
//   rev= rev+str.charAt(i);
// }
// console.log(rev);
// for(let i=0; i<str.length; i++){
//   console.log(str.charAt(i));
// }
// for(let i=str.length-1; i>=0; i--){
//   console.log(str.charAt(i));
// }
// let str=prompt("Enter a name:");
// console.log(str);
// let arr=new Array(128).fill(0);
// for(let i=0; i<str.length; i++){
//   let index=str.charCodeAt(i); 
//   arr[index]=arr[index]+1;
//   console.log(`${String.fromCharCode(index)} appeared ${arr[index]} times.`);
  
// }
// console.log(str.charCodeAt(i));
// let conv="";
// for(let i=0;i<str.length; i++){
//   let code=str.charCodeAt(i);
//   if(code>=65 && code<=90){
//     conv=conv+String.fromCharCode(code+32);
//   }else if(code>=97 && code<=122){
//     conv=conv+String.fromCharCode(code-32);
//   }
// }
// console.log(conv);
// for(let i=str.length-1; i>=0; i--){
//    rev=rev+str.charAt(i);
// }
// console.log(str, rev);
// if(rev===str){
//   console.log("The name entered is a palindrome!");
// }else{
//   console.log("The name enetered is not a palindrome!");
// }

// let i=0;
// let j=str.length-1;
// let isPalindrome=true;
// while(i<j){
//   if(str.charAt(i)!=str.charAt(j)){
//    isPalindrome=false;
//    console.log("The entered name is not a palindrome!");
//      break;
//   }
//   i++;
//   j--;
// }
// if (isPalindrome==true){
//   console.log("The enetred name is a palindrome!");
// }


// const arrfunc=()=>{
//   let n = prompt("Enter the length of the array:");
//   let arr = new Array();
//    for(let i=0; i<n; i++){
//     let ele = prompt("Enter the elements to the array:");
//     let num = Number(ele);
//     arr.push(num);
//    }
//    let g = arr[0];
//    for(let i=0; i<n; i++){
//     if(arr[i]>g){
//       g=arr[i];
//     }
//    }
//    return g;
// }
// console.log(arrfunc());