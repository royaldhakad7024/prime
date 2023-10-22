// Taking the following array into consideration get the output as given below use:
// arr = [3,4,5,6,7]
// Output ==> 3 - 5 - 7
let arr = [3,4,5,6,7];
let bag="";
arr.forEach((val,ind)=>ind%2==0?bag+=val+" ":bag+="-"+" ");
console.log(bag);