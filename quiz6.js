let user = { name: 'John', years: 30 };
let { name: firstName, years: age, admin: isAdmin = false } = user;

console.log(firstName); 
console.log(age);
console.log(isAdmin); 
