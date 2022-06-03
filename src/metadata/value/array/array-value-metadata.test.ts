import { TestDeclarationScope } from '../../../declaration/test-declaration-metadata';
import { parseExpression } from '../../../util/parse';
import { getValueMetadata } from '../value-metadata-helper';
import { ArrayValueMetadata } from './array-value-metadata';

test('empty', () => {
  const code = '[]';
  const tree = parseExpression(code);
  const metadata = getValueMetadata(tree, new TestDeclarationScope());

  expect(metadata).toBeInstanceOf(ArrayValueMetadata);
});

test('123', () => {
  const code = '[1, 2, 3]';
  const tree = parseExpression(code);
  const metadata = getValueMetadata(tree, new TestDeclarationScope());

  expect(metadata).toBeInstanceOf(ArrayValueMetadata);
});
