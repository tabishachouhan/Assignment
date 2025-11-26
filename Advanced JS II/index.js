
let age = 30;


function displayAge() {
  console.log("Current age (from displayAge):", age);
}


function changeAge() {
  age = 35; 
  console.log("Age updated (from changeAge):", age);
}



console.log("--- Initial State ---");
displayAge(); 

console.log("\n--- Applying Change ---");
changeAge();  
console.log("\n--- Post-Change State ---");

displayAge(); 