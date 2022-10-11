const Employee = require(''../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer;