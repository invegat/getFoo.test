import test from 'tape';
import getFoo from './getFoo';

test('getFoo', ({ equal, end }) => {
  const actual = getFoo();
  const expected = "foo";

  equal(actual, expected);
  end();
 })
