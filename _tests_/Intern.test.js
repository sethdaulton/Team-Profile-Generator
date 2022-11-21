const Intern = require('../lib/Intern.js');

describe('Intern class', () => {
    it("has a function that returns its school", () => {
        const newEmployee = new Intern('Tim', 4, 'tim@apple.com', 'Baylor University')
        expect(newEmployee.getSchool()).toBe('Baylor University')
    });
    it("has a function that returns its role", () => {
        const newEmployee = new Intern('Tim', 4, 'tim@apple.com', 'Baylor University')
        expect(newEmployee.getRole()).toBe('Intern')
    });  

})