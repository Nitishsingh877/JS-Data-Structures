const arr = [-1, 0, 1, 2, -1, -4]
let n = arr.length
let triplets = []
arr.sort((a,b) => a - b)
for(let i = 0;i<n-2;i++){
  if(i> 0 && arr[i]  === arr[i-1]) continue;

  let left = i+1, right = n-1;
  while (left < right){
    let sum =   arr[left] + arr[right]+arr[i];
    if(sum === 0){
      triplets.push([arr[i], arr[left], arr[right]]);
      left++;
      right--;
      while(left < right && arr[left] === arr[left -1]) left++;
      while(left < right && arr[right] === arr[right+1]) right--;
    }
    else if(sum<0) left++;
    else right--;

  }
}
console.log(triplets)


