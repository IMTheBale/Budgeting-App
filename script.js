const budget = 2500;
const savingPriority = "low";
const rent = 800;
const utilities = 200;
const newLaptop = 1400;
const totalCosts = rent + utilities;
const budgetLeft = budget - totalCosts;
const buyLaptop = budgetLeft >= newLaptop;
console.log("New Laptop Within Budget:");
console.log(buyLaptop);
console.log("Postpone Purchase and Save Instead:");
console.log(savingPriority === "high");