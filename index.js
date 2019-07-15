const coins = require('./data/coins');
const coinsPacker = require('./src/coinsPacker');
const { rollsCustom } = require('./constants');

try {
    console.log(coinsPacker(coins, rollsCustom));
} catch (e) {
    console.warn(e.message);
}
