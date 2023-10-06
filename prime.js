let n=13;
let count=0;
for(let i=1; i<=13; i++){
    if(n%i==0){
        count++;
    }
}
if(count=='2'){
    console.log("Prime");
}
else{
    console.log("not prime");
}