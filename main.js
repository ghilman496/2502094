
import { ghilmanProfile, calculateArea, greet } from './utils.js';


console.log(`User name: ${ghilmanProfile.name}`);
console.log(`User age: ${ghilmanProfile.age}`);

const gardenArea = calculateArea(15, 8);
console.log(`The garden area is ${gardenArea} square meters.`);

const greetingMessage = greet(ghilmanProfile.name);
console.log(greetingMessage);