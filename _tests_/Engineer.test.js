const Engineer = require('../lib/Engineer.js');

describe('Engineer class', () => {
    it("has a function that returns its Github", () => {
        const newEmployee = new Engineer('Seth', 3, 'seth@apple.com', 'sethdaulton')
        expect(newEmployee.getGithub()).toBe('sethdaulton')
    }); 

})