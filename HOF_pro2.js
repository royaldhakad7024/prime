// Create a new array from the given array such that each element of the new array is raised to a power of 5 with the help of HOF.
// Input = [2, 3, 4, 6, 7]
// Output = [32, 243, 1024, 7776, 16807]
let input=[2,3,4,6,7];
let output=input.map((val,ind)=>val**5);
console.log(output);