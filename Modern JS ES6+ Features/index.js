/* Q11 */

const multiply = (a = 1, b = 1) => a * b;


/* Q12 */

const calculatePowers = (n) => ({ square: n * n, cube: n * n * n });


/* q13 */

const people = [
  { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } },
  { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } }
];

const formattedStrings = people.map(person => {
  
  const { 
    name, 
    address: { 
      city, 
      street: { name: streetName } 
    } 
  } = person;

 
  return `${name} lives in ${city} on ${streetName}`;
});

console.log(formattedStrings);

/* Q14 */


const profile = { 
  name: "Charlie", 
  age: 29, 
  address: { city: "San Francisco", zipcode: "94101" } 
};

const updates = { 
  age: 30, 
  address: { zipcode: "94109", country: "USA" } 
};


const mergeProfile = (profile, updates) => ({
  ...profile,

  
  ...updates, 

  
  address: {
    ...profile.address,
    ...updates.address
  }
});

const mergedObject = mergeProfile(profile, updates);

console.log(mergedObject);

/* Q15 */
//a

const username = "Alex";
const course = "JavaScript Fundamentals";

console.log(`Hello, ${username}, welcome to the ${course}!`);

//b

const name = "Sam";
const age = 21;

const student = {

  greet() {
    console.log("Hello");
  }
};

//c
const getFullName = (first, last) => `${first} ${last}`;

console.log(getFullName("Ada", "Lovelace")); 



