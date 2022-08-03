const Manager = require('../lib/Manager');
  
test('generates Manager object', () => {
    const manager = new Engineer('Jerry', 45, 'jerryboberry@gmail.com');
    
    expect(manager.managerNumber).toEqual(expect.any(Number));
});

test('returns role of manager', () => {
    const manager = new Manager('Jerry', 45, 'jerryboberry@gmail.com', 7);

    expect(manager.getRole()).toEqual("Manager");
}); 