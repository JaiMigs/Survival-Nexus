export function daysOfSupplies(units, dailyUse) {
    
    if (
        !Number.isSafeInteger(units) ||
        units < 0 ||
        units > 1000000
    ) {
        throw new RangeError(
            "Invalid units: must be a safe integer from 0 to 1000000"
        );
    }

    
    if (
        !Number.isSafeInteger(dailyUse) ||
        dailyUse < 1 ||
        dailyUse > 1000000
    ) {
        throw new RangeError(
            "Invalid daily use: must be a safe integer from 1 to 1000000"
        );
    }

    return Math.floor(units / dailyUse);
}