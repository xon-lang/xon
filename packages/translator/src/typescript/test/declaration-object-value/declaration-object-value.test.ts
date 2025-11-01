import {test} from 'vitest';
import {translateTestFile} from '../translate-test-file';

test('declaration-object-value', async () => {
  await translateTestFile('declaration-object-value');
});
