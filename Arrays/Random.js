let a = [];
for (let i = 0; i < 10; i++) {
  a.push(Math.floor(Math.random() * 900) + 100); // Generates random 3-digit numbers
}

// let largest = Number.MIN_VALUE;
// let secondLargest = Number.MIN_VALUE;
// let smallest = Number.MAX_VALUE;
// let secondSmallest = Number.MAX_VALUE;

// a.forEach(element => {
//   if (element > largest) {
//     secondLargest = largest;
//     largest = element;
//   } else if (element > secondLargest && element < largest) {
//     secondLargest = element;
//   }

//   if (element < smallest) {
//     secondSmallest = smallest;
//     smallest = element;
//   } else if (element > smallest && element < secondSmallest) {
//     secondSmallest = element;
//   }
// });

// console.log("Array:", a.toString());
// console.log("Second Largest =", secondLargest);
// console.log("Second Smallest =", secondSmallest);

let compare  = (a,b) => {
  return a - b;
}
a.sort(compare)

console.log(a.toString())
console.log("Second largest = "+a[a.length-2])
console.log("Second Smallest = "+a[1])