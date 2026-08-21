// 1. Inferred string
let name = "Mahidi";
console.log(name);
//name = 20


// 2. Inferred Union (number | string)
let cups = Math.random() > 0.5 ? 10 : "World Cup";
console.log(cups);

// 3. Explicit primitive types
let fullName: string = "Mahidi Hasan";
fullName = "Mahidi Hasan Chowdhury";

let age: number = 25;
let isDev: boolean = true;

// 4. Primitive Union (lowercase string)
let anything: number | string = "1M";

// 5. Literal Union Types (Great job here!)
let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';
apiRequestStatus = "success"; 

let airLineSeat: 'aisle' | 'middle' | 'window' = 'window';
airLineSeat = 'aisle'; 

// 6. Loop 1 (Fixed with for...of & explicit union type)
const orders = ['12', '20', '28', '42'];
let currentOrder: string | number | undefined;

for (let order of orders) {  // Use for...of for values!
    if (order === '28') {
        currentOrder = order;
        break;
    }         
}
console.log("Current Order:", currentOrder); // Prints '28'
currentOrder = 42;
console.log("Updated Order:", currentOrder); // Prints 42

// 7. Loop 2 (Fixed with for...of and correct variable name)
const numbers = ['12', '20', '28', '42'];
let currentNumber: string | number | undefined;

for (let number of numbers) { // Use for...of for values!
    if (number === '28') {
        currentNumber = number;
        break;
    }         
}
console.log("Current Number:", currentNumber); // Prints '28'
currentNumber = 42;
console.log("Updated Number:", currentNumber); // Prints 42



// Define the contract/shape for a Student object
interface Student {
  id: number;
  name: string;
  isEnrolled: boolean;
  email?: string; // The '?' means this property is OPTIONAL
}

// Create an object that follows the Student shape
let studentA: Student = {
  id: 101,
  name: "Rahim",
  isEnrolled: true
};

// If you forget a required field, TypeScript will warn you!
let studentB: Student = {
  id: 102,
  name: "Karim"
  // ❌ Error: Property 'isEnrolled' is missing!
};