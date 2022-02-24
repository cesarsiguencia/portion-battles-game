const Potion = require('../lib/Potion.js');

test('creates a health potion object',() => {
    const potion = new Potion (); //this part is the constructor30

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
})