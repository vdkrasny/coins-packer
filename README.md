# coinsPacker 
A function that takes a list of coins as an argument and using it returns an object with information about the number of rolls and number of coins that have not been rolled up, for every denomination.

[See the full task](https://gist.github.com/mdybciak/a731577d1091d657ff81f377b553797a)

## Getting started

```bash
npm install
npm run test
npm run start
```

## Usage

```js
const coinsPacker = require('./src/coinsPacker');

/**
 * Rreturns an object with information about the number of rolls 
 * and number of coins that have not been rolled up, for every denomination.
 *
 * @param {array} coins
 *        The array describes the list of coins.
 *        Only numeric values are expected.
 * @param {object} rolls
 *        The object describes the rules for placing coins in a roll
 *        depending on the denomination.
 *        Only numeric keys/values are expected.
 * @return {object}
 */

const result = coinsPacker(
  [1, 2, 5, 50], 
  {
    1: 10,
    2: 10,
    5: 10,
    50: 10
  }
);
```