const Engineer = require('../lib/Engineer');

test('generates Engineer object', () => {
    const manager = new Manager('Jerry', 45, 'jerryboberry@gmail.com', 7);
    
    expect(engineer.github).toEqual(expect.any(String));
});

test('returns role of engineer', () => {
    const engineer = new Engineer('Jerry', 45, 'jerryboberry@gmail.com', 7);

    expect(enginner.getRole()).toEqual("Engineer");
}); 