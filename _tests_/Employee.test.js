const Employee = require('../lib/Employee.js');

describe('Employee class', () => {
    it("has a function that returns its name", () => {
        const newEmployee = new Employee('Tom', 2, 'tom@apple.com')
        expect(newEmployee.getName()).toBe('Tom')
    }); 

})