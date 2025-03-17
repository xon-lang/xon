import {newFileResource, newText, newURI} from '#common';
import {resolve} from 'node:path';
import {expect, test} from 'vitest';

test('File resource', () => {
  const uri = newURI(newText(resolve(__dirname, 'file-resource.test.ts')));
  const file = newFileResource(uri);

  expect(file.exists()).toBe(true);
  expect(file.name.toNativeString()).toBe('file-resource.test.ts');
  expect(file.extension.toNativeString()).toBe('.ts');
  expect(file.getDirectory().name.toNativeString()).toBe('file');
});
