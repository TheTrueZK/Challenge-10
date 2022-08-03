const Employee = require('../lib/Employee');

test('generates employee object', () => {
    const employee = new Employee('Jerry', 45, 'jerryboberry@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('returns role of employee', () => {
    const employee = new Employee('Jerry', 45, 'jerryboberry@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 