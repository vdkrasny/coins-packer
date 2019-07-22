const { isNumber, isObject } = require('../utils');
const { rollsEU } = require('../constants');

function coinsPacker(coins = [], rolls = rollsEU) {
    if (!Array.isArray(coins)) throw new Error(`TypeError: ${JSON.stringify(coins)} is not an array`);
    if (!isObject(rolls)) throw new Error(`TypeError: ${JSON.stringify(rolls)} is not an object`);

    const coinsCounter = {};
    const outputResult = {};

    coins.forEach((coin) => {
        if (!isNumber(coin)) throw new Error(`TypeError: ${coin} of the ${JSON.stringify(coins)} is not a number`);
        coinsCounter[coin] = coinsCounter[coin] ? coinsCounter[coin] + 1 : 1;
    });

    const rollsDenomination = Object.keys(rolls);

    rollsDenomination.forEach((rollDenomination) => {
        if (!isNumber(rollDenomination)) throw new Error(`TypeError: ${rollDenomination} of the ${JSON.stringify(rolls)} is not a number`);

        const rollCount = rolls[rollDenomination];

        if (!isNumber(rollCount)) throw new Error(`TypeError: ${rollCount} of the ${JSON.stringify(rolls)} is not a number`);

        const coinsNumber = coinsCounter[rollDenomination];

        if (coinsNumber) {
            outputResult[rollDenomination] = {
                'rolls': Math.floor(coinsNumber / rollCount),
                'rest': coinsNumber % rollCount
            };
        }
    });

    return outputResult;
}


module.exports = coinsPacker;
