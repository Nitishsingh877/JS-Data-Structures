let N = Number(process.argv[2]);

let arr = [];
if(N<=1){
  console.log("No prime factors");
}
else{
  while(N %2 === 0){
    arr.push(2)
    N/=2
  }
  for(let i = 3;i*i<=N;i+=2){
    while(N%i == 0){
      arr.push(i)
      N/=i
    }

  }
}

console.log("Factors are ",arr.join(" "));