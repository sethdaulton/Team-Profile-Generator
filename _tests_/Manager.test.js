const Manager = require('../lib/Manager.js');

describe('Manager class', () => {
    it("has a function that returns its office number", () => {
        const newEmployee = new Manager('Sam', 4, 'sam@apple.com', 1)
        expect(newEmployee.getOfficeNumber()).toBe(1)
    }); 

})