// SUPPLIES
const waterUnits = 18;
const survivorCount = 6;
const waterPerSurvivor = 2;

// CALCULATIONS
const waterDailyDemand = survivorCount * waterPerSurvivor;
const waterCompleteDays = Math.floor(waterUnits / waterDailyDemand);
const waterLeftover = waterUnits - (waterCompleteDays * waterDailyDemand);

// RESULTS
console.log("Starting water units:", waterUnits);
console.log("Number of survivors:", survivorCount);
console.log("Water needed per survivor:", waterPerSurvivor);
console.log("Daily water demand:", waterDailyDemand);
console.log("Complete days:", waterCompleteDays);
console.log("Leftover water:", waterLeftover);


// FOOD SUPPLIES
const foodUnits = 25;
const foodSurvivors = 4;
const foodPerSurvivor = 2;

// CALCULATIONS
const foodDailyDemand = foodSurvivors * foodPerSurvivor;
const foodCompleteDays = Math.floor(foodUnits / foodDailyDemand);
const foodLeftover = foodUnits - (foodCompleteDays * foodDailyDemand);

// RESULTS
console.log("Starting food units:", foodUnits);
console.log("Number of survivors:", foodSurvivors);
console.log("Food needed per survivor:", foodPerSurvivor);
console.log("Daily food demand:", foodDailyDemand);
console.log("Complete days:", foodCompleteDays);
console.log("Leftover food:", foodLeftover);