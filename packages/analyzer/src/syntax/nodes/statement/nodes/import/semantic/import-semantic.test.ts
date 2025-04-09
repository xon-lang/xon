import {getDeclarationsFromUri, newDeclarationScope} from '#analyzer';
import {newText, newUri} from '#common';
import {resolve} from 'node:path';
import {expect, test} from 'vitest';

test('File import scope', () => {
  const fileName = 'import-semantic-test-file.xon';
  const filePath = newText(resolve(__dirname, fileName));
  const declarations = getDeclarationsFromUri(newUri(filePath));
  const scope = newDeclarationScope(declarations);

  expect(scope.count()).toBe(1);
  expect(scope.get(newText('Point'))?.first()?.name.toNativeString()).toBe('Point');
});
