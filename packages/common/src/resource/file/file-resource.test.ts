import {newFileResource, newText, newUri} from '#common';
import {resolve} from 'node:path';
import {expect, test} from 'vitest';

test('File resource', () => {
  const uri = newUri(newText(resolve(__dirname, 'file-resource.test.ts')));
  const file = newFileResource(uri);

  expect(file.exists()).toBe(true);
  expect(file.basename.toNativeString()).toBe('file-resource.test.ts');
  expect(file.extension.toNativeString()).toBe('.ts');
  expect(file.directory().name.toNativeString()).toBe('file');
});
