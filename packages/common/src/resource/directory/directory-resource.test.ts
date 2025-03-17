import {newArrayData, newDirectoryResource, newText, newURI} from '#common';
import {resolve} from 'node:path';
import {expect, test} from 'vitest';

test('Directory resource', () => {
  const uri = newURI(newText(resolve(__dirname)));
  const directory = newDirectoryResource(uri);

  expect(directory.exists()).toBe(true);
  expect(directory.name.toNativeString()).toBe('directory');
  expect(newArrayData(directory.getResources()).count()).toBe(3);
});
