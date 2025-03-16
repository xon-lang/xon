import {newFileImportScope} from '#analyzer';
import {newText} from '#common';
import {resolve} from 'node:path';
import {expect, test} from 'vitest';

test('File import scope', () => {
  const fileName = 'file-import-test-file.xon';
  const filePath = newText(resolve(__dirname, fileName));
  const importScope = newFileImportScope(filePath);

  expect(importScope._declarations?.count()).toBe(1);
  expect(importScope.get(newText('Point'))?.name.toNativeString()).toBe('Point');
});
