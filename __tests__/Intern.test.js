const Intern = require('../lib/Intern');
const intern = new Intern('Mario', '324', 'mario.hernandez@sovosbrands.com','St Edwards');

test('we are testing constructor values', () => {
    expect(intern.name).toBe('Mario');
    expect(intern.id).toBe('324');
    expect(intern.email).toBe('mario.hernandez@sovosbrands.com');
    expect(intern.school).toBe('St Edwards');
});

test('we are testing the name function getName()', () => {
    expect(intern.getName()).toBe('Mario');
});

test('we are testing the id function getId()', () => {
    expect(intern.getId()).toBe('324');
});

test('we are testing the email function getEmail()', () => {
    expect(intern.getEmail()).toBe('mario.hernandez@sovosbrands.com');
});

test('we are testing the role function getRole()', () => {
    expect(intern.getRole()).toBe('Intern');
});

test('we are testing the function officeNumber()', () => {
    expect(intern.getSchool()).toBe('St Edwards');
});