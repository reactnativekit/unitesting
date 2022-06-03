const mul = require('./mul');

test('multiplies 8 * 3 to equal 24', () => {
    expect(mul(8, 3)).toBe(24);
});