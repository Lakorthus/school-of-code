// Run one time
let enterToTheBar = () => {
  let yourAge = prompt("What is your Age?");
  let customer;

  if (yourAge < 18) {
    console.log("Get out of here!");
  } else if (yourAge >= 45) {
    customer = prompt("And your name Mr.?");
    alert("You Have 25% discount in all drinks");
    // console.log("Welcome to the PUB Mister " + customer)
    document.getElementById("tittle").innerHTML =
      "Welcome to the Bar Mister " + customer;
  } else {
    customer = prompt("And your name Mr.?");
    // console.log("Welcome to the PUB Mister " + customer)
    document.getElementById("tittle").innerHTML =
      "Welcome to the Bar Mister " + customer;
  }
};
// Repeat
let count = 0;

while (count <= 10) {
  console.log("Hi " + count);
  count = count + 1;
}

// For loops

for (let count = 0; count <= 10; count++) {
  console.log("Hi " + count);
}
