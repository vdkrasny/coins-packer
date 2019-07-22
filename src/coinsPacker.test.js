const coinsPacker = require('./coinsPacker');
const taskCoins = require('../data/coins');
const { rollsCustom } = require('../constants');

describe('coinsPacker()', () => {
    it('Should throw an error if the coins param is not an array', () => {
        const coins1 = '1';
        const coins2 = NaN;

        expect(() => coinsPacker(coins1))
            .toThrow();
        expect(() => coinsPacker(coins2))
            .toThrow();
    });

    it('Should throw an error if a some item of the coins param is not a number', () => {
        const coins1 = [1, 'str'];
        const coins2 = [1, NaN];
        const coins3 = [1, undefined];

        expect(() => coinsPacker(coins1))
            .toThrow();
        expect(() => coinsPacker(coins2))
            .toThrow();
        expect(() => coinsPacker(coins3))
            .toThrow();
    });

    it('Should throw an error if the rolls param is not an true object', () => {
        const coins = [1, 1, 2, 2];
        const rolls = [];

        expect(() => coinsPacker(coins, rolls))
            .toThrow();
    });

    it('Should throw an error if a some key of the rolls param is not a number', () => {
        const coins = [1, 1, 2, 2];
        const rolls = { whatever: 100 };

        expect(() => coinsPacker(coins, rolls))
            .toThrow();
    });

    it('Should throw an error if a some value of the rolls param is not a number', () => {
        const coins = [1, 1, 2, 2];
        const rolls = { 50: Infinity };

        expect(() => coinsPacker(coins, rolls))
            .toThrow();
    });

    describe('Results of correct function operation', () => {
        it('Should work correctly with 5 types of denomination"', () => {
            const inputData = [1, 1, 2, 2, 5, 5, 10, 50];
            const expectedResult = {
                1: { rolls: 0, rest: 2 },
                2: { rolls: 0, rest: 2 },
                5: { rolls: 0, rest: 2 },
                10: { rolls: 0, rest: 1 },
                50: { rolls: 0, rest: 1 },
            };

            expect(coinsPacker(inputData, rollsCustom))
                .toStrictEqual(expectedResult);
        });

        it('Should work correctly with 3 types of denomination', () => {
            const inputData = [
                ...Array.from({ length: 101 }, () => 1),
                ...Array.from({ length: 200 }, () => 2),
                20,
            ];
            const expectedResult = {
                1: { rolls: 2, rest: 21 },
                2: { rolls: 5, rest: 0 },
                20: { rolls: 0, rest: 1 },
            };

            expect(coinsPacker(inputData, rollsCustom))
                .toStrictEqual(expectedResult);
        });

        it('Should work correctly with input data', () => {
            const inputData = taskCoins;
            const expectedResult = {
                1: { rolls: 40, rest: 34 },
                2: { rolls: 40, rest: 10 },
                5: { rolls: 55, rest: 13 },
                10: { rolls: 33, rest: 40 },
                20: { rolls: 85, rest: 11 },
                50: { rolls: 42, rest: 12 },
            };

            expect(coinsPacker(inputData, rollsCustom))
                .toStrictEqual(expectedResult);
        });
    });
});
