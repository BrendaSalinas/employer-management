const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Josh', '145', 'josh.hehman@sovosbrands.com','JoshHehman');

test('we are testing constructor values', () => {
    expect(engineer.name).toBe('Josh');
    expect(engineer.id).toBe('145');
    expect(engineer.email).toBe('josh.hehman@sovosbrands.com');
    expect(engineer.github).toBe('JoshHehman');
});

test('we are testing the name function getName()', () => {
    expect(engineer.getName()).toBe('Josh');
});

test('we are testing the id function getId()', () => {
    expect(engineer.getId()).toBe('145');
});

test('we are testing the email function getEmail()', () => {
    expect(engineer.getEmail()).toBe('josh.hehman@sovosbrands.com');
});

test('we are testing the role function getRole()', () => {
    expect(engineer.getRole()).toBe('Engineer');
});

test('we are testing the function officeNumber()', () => {
    expect(engineer.getGithub()).toBe('JoshHehman');
});