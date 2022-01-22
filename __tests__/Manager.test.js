const Manager = require('../lib/Manager');
const manager = new Manager('Triston', '536', 'triston.beadle@sovosbrands.com','3');

test('we are testing constructor values', () => {
    expect(manager.name).toBe('Triston');
    expect(manager.id).toBe('536');
    expect(manager.email).toBe('triston.beadle@sovosbrands.com');
    expect(manager.officeNumber).toBe('3');
});

test('we are testing the name function getName()', () => {
    expect(manager.getName()).toBe('Triston');
});

test('we are testing the id function getId()', () => {
    expect(manager.getId()).toBe('536');
});

test('we are testing the email function getEmail()', () => {
    expect(manager.getEmail()).toBe('triston.beadle@sovosbrands.com');
});

test('we are testing the role function getRole()', () => {
    expect(manager.getRole()).toBe('Manager');
});

test('we are testing the function officeNumber()', () => {
    expect(manager.getOfficeNumber()).toBe('3');
});