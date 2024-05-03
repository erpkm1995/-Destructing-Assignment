// 06. Nested Objects.

// Write a function that takes an object representing a person as input and extracts the name and street properties from a nested object using object destructuring. The function should return an object with these two properties. A sample object is given below.

const person = {
    name: "Ram",
    age: 21,
    address: {
      street: "C2, Block D, Near Temple.",
      city: "Sector 98, Dhanbad",
      state: "Jharkhand",
    },
  };
  
  function extractData(obj) {
    const {
      name,
      address: { street },
    } = obj;
    return { name, street };
  }
  
  console.log(extractData(person));