var test = require('tape').test;

function getFoo() {
  return 'foo';
}


test('getFoo', ({ equal, end }) => {
  const actual = getFoo();
  const expected = "foo";

  equal(actual, expected);
  end();
 })