const isTrueObject = require('./isTrueObject');

describe('isObject()', () => {
    const variants = [
        [1, false],
        // eslint-disable-next-line no-new-wrappers
        [new Number('1'), false],
        ['just a string', false],
        // eslint-disable-next-line no-new-wrappers
        [new String('just a string'), false],
        [[], false],
        [new Array(''), false],
        [() => {}, false],
        // eslint-disable-next-line no-new-func
        [new Function(), false],
        [null, false],
        [undefined, false],
        [{}, true],
        // eslint-disable-next-line no-new-object
        [new Object(), true],
    ];

    test.each(variants)(
        'isObject(%p) => %p',
        (arg, expected) => {
            expect(isTrueObject(arg))
                .toBe(expected);
        },
    );
});
