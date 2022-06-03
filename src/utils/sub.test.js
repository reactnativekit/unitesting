const sub = require('./sub');

test('subtracts 8 - 3 to equal 5', () => {
    expect(sub(8, 3)).toBe(5);
});