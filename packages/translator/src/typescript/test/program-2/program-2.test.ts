import {test} from 'vitest';
import {translateTestFile} from '../translate-test-file';

test('program 2 typescript translator', async () => {
  await translateTestFile('program-2');
});
