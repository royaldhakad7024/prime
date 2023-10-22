// Find the average of elements present at odd index of the following array with the help of HOF.
// let arr = [10, 24, 56, 72, -10, -88, 100, 564];
let arr = [10, 24, 56, 72, -10, -88, 100, 564];
let odd_arr = arr.filter(function(val, ind) {
  return ind % 2 == 1;
}).reduce(function(acc, val) {
  return acc + val;
})
let avg = odd_arr / arr.length;
console.log(avg);
// by aero function.
// let odd_arr=arr.filter((val,ind)=>ind%2==1).reduce((acc,val)=>acc+val,0)
// console.log(odd_arr/arr.length)