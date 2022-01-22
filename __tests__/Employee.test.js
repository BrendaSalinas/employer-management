const Employee = require('../lib/Employee');
const employee = new Employee('Brenda', '546', 'brenda.salinas2128@gmail.com');

test('we are testing constructor values', () => {
    expect(employee.name).toBe('Brenda');
    expect(employee.id).toBe('546');
    expect(employee.email).toBe('brenda.salinas2128@gmail.com')
});

test('we are testing the name function getName()', () => {
    expect(employee.getName()).toBe('Brenda');
});

test('we are testing the id function getId()', () => {
    expect(employee.getId()).toBe('546');
});

test('we are testing the email function getEmail()', () => {
    expect(employee.getEmail()).toBe('brenda.salinas2128@gmail.com');
});

test('we are testing the role function getRole()', () => {
    expect(employee.getRole()).toBe('Employee');
});
