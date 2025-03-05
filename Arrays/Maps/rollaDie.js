let map = new Map();

function checker(map){
  for(let value of map.values()){
    if(value == 10) return false;
  }
  return true;
}

while(checker(map)){
  let die = Math.floor(Math.random() * 6) + 1;
  if(map.has(die)){
    map.set(die,map.get(die)+1);
  }
  else{
    map.set(die,1);
  }
}
let maximum  = 0;
let minimum = 11;
map.forEach(function(value){
  maximum = Math.max(maximum,value);
  minimum = Math.min(minimum,value);
})
console.log(map.toString());
console.log(maximum, minimum);