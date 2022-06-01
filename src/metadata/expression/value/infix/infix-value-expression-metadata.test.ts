import { parseExpression } from '../../../util/parse';
import { TestDeclarationScope } from '../../declaration/test-declaration-metadata';
import { getValueExpressionMetadata } from '../value-expression-metadata-helper';
import { InfixValueExpressionMetadata } from './infix-value-expression-metadata';

test('integer plus integer', () => {
  const code = '1 + 1';
  const tree = parseExpression(code);
  const metadata = getValueExpressionMetadata(tree, new TestDeclarationScope());
  expect(metadata).toBeInstanceOf(InfixValueExpressionMetadata);
});
