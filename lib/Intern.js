const Employee = require('./Employee');

module.exports = class Intern extends Employee {
    constructor(name,id,email,school) {
        super(name,id,email);
        this.school = school;
    };
    getRole = () => 'Intern';
    getSchool = () => this.school;
};
