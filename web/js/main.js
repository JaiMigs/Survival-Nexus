
// WATER SUPPLIES
let waterIsValid = true;

const waterUnits = 18;
if (
    Number.isSafeInteger(waterUnits) &&
    waterUnits >=0 &&
    waterUnits <= 1000000
) {
    console.log("Valid stock");
} else {
    console.log("Invalid stock");
    waterIsValid = false;
}


const survivorCount = 6;
if (
    Number.isSafeInteger(survivorCount) &&
    survivorCount > 0 
) {
    console.log("Valid survivor count");
} else {
    console.log("Invalid survivor count");
    waterIsValid = false;
}


const waterPerSurvivor = 2;
if (
    Number.isSafeInteger(waterPerSurvivor) &&
    waterPerSurvivor > 0
) {
    console.log("Valid");
} else {
    console.log("Invalid");
    waterIsValid = false;
}

const waterDailyDemand = survivorCount * waterPerSurvivor;
if (
    Number.isSafeInteger(waterDailyDemand) &&
    waterDailyDemand > 0
) {
    console.log("Valid");
} else {
    console.log("Invalid");
    waterIsValid = false;
}

if (waterIsValid) {

const waterCompleteDays = Math.floor(waterUnits / waterDailyDemand);
if (
    Number.isSafeInteger(waterCompleteDays) &&
    waterCompleteDays >= 0
) {
    console.log("Valid complete days");
} else {
    console.log("Invalid complete days");
    waterIsValid = false;
}

const waterLeftover = waterUnits - (waterCompleteDays * waterDailyDemand);
if (
    Number.isSafeInteger(waterLeftover) &&
    waterLeftover >= 0
) {
    console.log("Valid leftover");
} else {
    console.log("Invalid leftover");
    waterIsValid = false;
}

if (waterIsValid) {
    console.log("Starting water units:", waterUnits);
    console.log("Number of survivors:", survivorCount);
    console.log("Water needed per survivor:", waterPerSurvivor);
    console.log("Daily water demand:", waterDailyDemand);
    console.log("Complete days:", waterCompleteDays);
    console.log("Leftover water:", waterLeftover);
} else {
    console.log("Water calculation rejected");
}
} else {
    console.log("Water calculation rejected");
}

// FOOD SUPPLIES
let foodIsValid = true;

const foodUnits = 25;
if (
    Number.isSafeInteger(foodUnits) &&
    foodUnits >= 0 &&
    foodUnits <= 1000000
) {
    console.log("Valid stock");
} else {
    console.log("Invalid stock");
    foodIsValid = false;
}

const foodSurvivors = 4;
if (
    Number.isSafeInteger(foodSurvivors) &&
    foodSurvivors > 0 
) {
    console.log("Valid Food needed");
} else {
    console.log("Invalid Food needed");
    foodIsValid = false;
}

const foodPerSurvivor = 2;
if (
    Number.isSafeInteger(foodPerSurvivor) &&
    foodPerSurvivor > 0
) {
    console.log("Valid");
} else {
    console.log("Invalid");
    foodIsValid = false;
}


const foodDailyDemand = foodSurvivors * foodPerSurvivor;
if (
    Number.isSafeInteger(foodDailyDemand) &&
    foodDailyDemand > 0
) {
    console.log("Valid");
} else {
    console.log("Invalid");
    foodIsValid = false;
}

if (foodIsValid) {
const foodCompleteDays = Math.floor(foodUnits / foodDailyDemand);
if (
    Number.isSafeInteger(foodCompleteDays) &&
    foodCompleteDays >= 0
) {
    console.log("Valid complete days");
} else {
    console.log("Invalid complete days");
    foodIsValid = false;
}

const foodLeftover = foodUnits - (foodCompleteDays * foodDailyDemand);
if (
    Number.isSafeInteger(foodLeftover) &&
    foodLeftover >= 0
) {
    console.log("Valid leftover");
} else {
    console.log("Invalid leftover");
    foodIsValid = false;
}

if (foodIsValid) {
    console.log("Starting food units:", foodUnits);
    console.log("Number of survivors:", foodSurvivors);
    console.log("Food needed per survivor:", foodPerSurvivor);
    console.log("Daily food demand:", foodDailyDemand);
    console.log("Complete days:", foodCompleteDays);
    console.log("Leftover food:", foodLeftover);
} else {
    console.log("Food calculation rejected");
}

} else {
    console.log("Food calculation rejected");
}

//REQUEST
let supplyIsValid = true;

let supplyStock = 5;
const requestedQuantity = 2;
const sourceInfected = false;

if (
    Number.isSafeInteger(supplyStock) &&
    supplyStock >= 0 &&
    supplyStock <= 1000000
) {
    console.log("Valid supply stock");
} else {
    console.log("Invalid supply stock");
    supplyIsValid = false;
}

if (
    Number.isSafeInteger(requestedQuantity) &&
    requestedQuantity >= 1 &&
    requestedQuantity <= 1000000
) {
    console.log("Valid requested quantity");
} else {
    console.log("Invalid requested quantity");
    supplyIsValid = false;
}

if (typeof sourceInfected === "boolean") {
    console.log("Valid infection status");
} else {
    console.log("Invalid infection status");
    supplyIsValid = false;
}

if (supplyIsValid) {
if (sourceInfected === true) {
    console.log("Supply request rejected: Source is infected");
} else if (requestedQuantity > supplyStock) {
    console.log("Supply request rejected: Not enough stock");
} else {
    supplyStock = supplyStock - requestedQuantity;

    console.log("Supply request approved");
    console.log("Remaining supply stock:", supplyStock);
}

} else {
    console.log("Supply request rejected: Invalid information");
}
