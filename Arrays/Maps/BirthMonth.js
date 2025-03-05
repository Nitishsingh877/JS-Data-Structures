let map = new Map();

// Populate map with random months
for (let i = 0; i < 50; i++) {
  let month = Math.floor(Math.random() * 12) + 1;
  map.set(month, (map.get(month) || 0) + 1);
}

// Iterate and print results
map.forEach((value, key) => {
  switch (key) {
    case 1:
      console.log("January:", value);
      break;
    case 2:
      console.log("February:", value);
      break;
    case 3:
      console.log("March:", value);
      break;
    case 4:
      console.log("April:", value);
      break;
    case 5:
      console.log("May:", value);
      break;
    case 6:
      console.log("June:", value);
      break;
    case 7:
      console.log("July:", value);
      break;
    case 8:
      console.log("August:", value);
      break;
    case 9:
      console.log("September:", value);
      break;
    case 10:
      console.log("October:", value);
      break;
    case 11:
      console.log("November:", value);
      break;
    case 12:
      console.log("December:", value);
      break;
    default:
      console.log("Invalid month:", key);
  }
});