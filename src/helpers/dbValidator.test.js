const {nameValidator, userNameValidator, passwordValidator, emailValidator} = require('./dbValidator');

test('name Jose bracho => true', async() => {
  const received = await nameValidator('Jose bracho');
  expect( received ).toEqual(true)
});
test('name Jose2 bracho => false', async() => {
  const received = await nameValidator('Jose2 bracho').catch(e => false);
  expect( received ).toEqual(false)
});

test('username spelled correctly (no space) Jose2bracho => true', async() => {
  // To carry out this test, the search in the database must be commented since it evaluates 2 things
  const received = await userNameValidator('Jose2bracho'); 
  expect( received ).toEqual(true)
});

test('password 23742Al* => true', async() => {
  const received = await passwordValidator('23742Al*');
  expect( received ).toEqual(true)
});

test('email ana@uru.com => true', async() => {
  // To carry out this test, the search in the database must be commented since it evaluates 2 things
  const received = await emailValidator('ana@uru.com');
  expect( received ).toEqual(true)
});

test('email ana@uru.edu => false', async() => {
  // To carry out this test, the search in the database must be commented since it evaluates 2 things
  const received = await emailValidator('ana@uru.edu').catch(e => false);
  expect( received ).toEqual(false)
});