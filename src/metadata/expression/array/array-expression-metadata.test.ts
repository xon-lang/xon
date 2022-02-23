import { parseExpression } from '../../../util/parse';
import { TestDeclarationScope } from '../../scope/test-declaration-scope';
import { getExpressionMetadata } from '../expression-metadata-helper';
import { ArrayExpressionMetadata } from './array-expression-metadata';

test('empty', () => {
  const code = '[]';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

  expect(metadata).toBeInstanceOf(ArrayExpressionMetadata);
});

test('123', () => {
  const code = '[1, 2, 3]';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

  expect(metadata).toBeInstanceOf(ArrayExpressionMetadata);
});
