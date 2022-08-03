const Intern = require('../lib/Intern');

test('generates Intern object', () => {
    const intern = new Intern('Jerry', 45, 'jerryboberry@gmail.com', 'UWM');
    
    expect(intern.school).toEqual(expect.any(String));
});

test('returns role of Intern', () => {
    const intern = new Intern('Jerry', 45, 'jerryboberry@gmail.com', 7, 'UWM');

    expect(intern.getRole()).toEqual("Intern");
}); 