import { parseExpression } from '../../../util/parse';
import { TestDeclarationScope } from '../../declaration/test-declaration-metadata';
import { getValueExpressionMetadata } from '../value-expression-metadata-helper';
import { MethodValueExpressionMetadata } from './method-value-expression-metadata';

test('lambda', () => {
  const code = '[x String] =>x + x';
  const tree = parseExpression(code);
  const metadata = getValueExpressionMetadata(tree, new TestDeclarationScope());

  expect(metadata).toBeInstanceOf(MethodValueExpressionMetadata);
});
