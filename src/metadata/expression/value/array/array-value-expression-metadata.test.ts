import { parseExpression } from '../../../../util/parse';
import { TestDeclarationScope } from '../../../declaration/test-declaration-metadata';
import { getValueExpressionMetadata } from '../value-expression-metadata-helper';
import { ArrayValueExpressionMetadata } from './array-value-expression-metadata';

test('empty', () => {
  const code = '[]';
  const tree = parseExpression(code);
  const metadata = getValueExpressionMetadata(tree, new TestDeclarationScope());

  expect(metadata).toBeInstanceOf(ArrayValueExpressionMetadata);
});

test('123', () => {
  const code = '[1, 2, 3]';
  const tree = parseExpression(code);
  const metadata = getValueExpressionMetadata(tree, new TestDeclarationScope());

  expect(metadata).toBeInstanceOf(ArrayValueExpressionMetadata);
});
